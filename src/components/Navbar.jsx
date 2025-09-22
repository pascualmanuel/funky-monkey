"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../assets/f-monkey-logo.svg";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  // UI state
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Links
  const navLinks = [
    { text: "Santa Teresa", link: "/santa-teresa" },
    { text: "The Hotel", link: "/hotel" },
    { text: "Rooms", link: "/rooms" },
    { text: "Activities", link: "/activities" }, // ojo: ruta distinta
    { text: "Retreats", link: "/retreats" },
    { text: "Offers", link: "/offers" },
    { text: "Contact", link: "/contact" },
  ];

  // Rutas donde el indicador NO debe mostrarse
  const HIDE_INDICATOR_ON = new Set(["/", "/book-now"]); // NEW

  // ---------- Indicador ----------
  const containerRef = useRef(null);
  const linkRefs = useRef([]);
  const indicatorRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const [indicator, setIndicator] = useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    visible: false,
    duration: 300, // ms
  });

  // Índice activo real (o null si está oculto/no existe) // CHANGED
  const rawIndex = navLinks.findIndex((l) => l.link === pathname);
  const isRouteHidden = HIDE_INDICATOR_ON.has(pathname);
  const activeIndex = !isRouteHidden && rawIndex >= 0 ? rawIndex : null;

  // Mide link i relativo al contenedor
  const measureLink = (index) => {
    const el = linkRefs.current[index];
    const cont = containerRef.current;
    if (!el || !cont) return null;
    const a = el.getBoundingClientRect();
    const b = cont.getBoundingClientRect();
    return {
      x: a.left - b.left,
      y: a.top - b.top,
      w: a.width,
      h: a.height,
    };
  };

  // Mueve sincrónicamente (sin navegar) al índice dado
  const moveIndicatorTo = (index, opts = { proportional: true }) => {
    const target = measureLink(index);
    if (!target) return;
    setIndicator((prev) => {
      let duration = prev.duration;
      if (opts.proportional && prev && typeof prev.x === "number") {
        const dist = Math.abs(target.x - prev.x);
        duration = Math.max(120, Math.min(700, Math.round(dist * 0.6)));
      }
      return { ...target, visible: true, duration };
    });
  };

  // Keyframes pasando por todos los intermedios
  const buildKeyframes = (fromIndex, toIndex) => {
    if (fromIndex === toIndex) return [];
    const step = fromIndex < toIndex ? 1 : -1;

    const frames = [];
    // Punto de partida
    const start = measureLink(fromIndex);
    if (start) {
      frames.push({
        transform: `translate(${start.x}px, ${start.y}px)`,
        width: `${start.w}px`,
        height: `${start.h}px`,
      });
    }
    // Intermedios + destino
    for (
      let i = fromIndex + step;
      step > 0 ? i <= toIndex : i >= toIndex;
      i += step
    ) {
      const pos = measureLink(i);
      if (!pos) continue;
      frames.push({
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        width: `${pos.w}px`,
        height: `${pos.h}px`,
      });
    }
    return frames;
  };

  // onClick de link: animar “viaje” y al terminar navegar
  const handleLinkClick = async (e, targetIndex) => {
    // Permitir nuevas pestañas y modificadores
    if (
      e.defaultPrevented ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }
    e.preventDefault();

    // Si la ruta actual NO muestra indicador (p.ej. "/" o "/contact"),
    // navegamos directo sin animación. // NEW
    if (activeIndex === null) {
      router.push(navLinks[targetIndex].link);
      return;
    }

    if (isAnimating) return;

    const el = indicatorRef.current;
    const fromIndex = activeIndex;
    const toIndex = targetIndex;

    // Si no hay indicador aún o no tenemos frames, navegamos directo
    if (!el) {
      router.push(navLinks[targetIndex].link);
      return;
    }

    const frames = buildKeyframes(fromIndex, toIndex);
    if (frames.length <= 1) {
      router.push(navLinks[targetIndex].link);
      return;
    }

    // Duración proporcional a la distancia horizontal total
    const extractX = (t) => {
      const m = t.match(/translate\(([-\d.]+)px,\s*[-\d.]+px\)/);
      return m ? parseFloat(m[1]) : 0;
    };
    const totalDistance = Math.abs(
      extractX(frames[frames.length - 1].transform) -
        extractX(frames[0].transform)
    );

    const duration = Math.max(
      250,
      Math.min(1200, Math.round(totalDistance * 0.8))
    );

    setIsAnimating(true);
    try {
      const animation = el.animate(frames, {
        duration,
        easing: "cubic-bezier(.22,.61,.36,1)",
        fill: "forwards",
      });
      await animation.finished;
    } catch {
      // si se cancela, igual navegamos
    } finally {
      setIsAnimating(false);
      router.push(navLinks[targetIndex].link);
    }
  };

  // Al cambiar ruta: si no hay índice válido, ocultar; si hay, posicionar // CHANGED
  useEffect(() => {
    if (isAnimating) return;
    if (activeIndex === null) {
      setIndicator((p) => ({ ...p, visible: false }));
      return;
    }
    const id = requestAnimationFrame(() => moveIndicatorTo(activeIndex));
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, isAnimating, activeIndex]);

  // Recalcular en resize/carga de fuentes (solo si hay índice válido) // CHANGED
  useEffect(() => {
    const onResize = () => {
      if (activeIndex === null) return;
      moveIndicatorTo(activeIndex, { proportional: false });
    };
    window.addEventListener("resize", onResize);
    if (document.fonts?.ready) {
      document.fonts.ready.then(onResize).catch(() => {});
    }
    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(onResize);
      if (containerRef.current) ro.observe(containerRef.current);
    }
    return () => {
      window.removeEventListener("resize", onResize);
      ro?.disconnect?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  // Mostrar/ocultar navbar por scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && lastScrollY < 90) setIsVisible(true);
      else if (current > lastScrollY) setIsVisible(false);
      else setIsVisible(true);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  const toggleMenu = () => setMenuOpen((s) => !s);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`navbar  fixed z-[1000] w-full ${
        isVisible ? "navbar-visible  z-50" : "navbar-hidden"
      }`}
      style={{
        background: "rgba(48, 48, 48, 0.5)",
        backdropFilter: "blur(15px)",
      }}
    >
      <nav className=" relative">
        <div className="h-[102px] mx-auto max-w-screen-2xl flex items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="ml-[20px] mg:ml-[80px] xl:ml-28">
              <img src={Logo.src} alt="Logo" className="w-[160px]" />
            </div>
          </Link>

          {/* Links centro */}
          <div className="flex-1 flex justify-center">
            <div className="nav-dot relative flex items-center">
              <div className="relative" ref={containerRef}>
                {/* Indicador (animado con WAAPI) */}
                {indicator.visible && (
                  <div
                    ref={indicatorRef}
                    className="absolute rounded-md bg-white/30 pointer-events-none hidden lg:block"
                    style={{
                      transform: `translate(${indicator.x}px, ${indicator.y}px)`,
                      width: `${indicator.w}px`,
                      height: `${indicator.h}px`,
                      zIndex: 1,
                    }}
                  />
                )}

                {/* Lista de links (más juntos: space-x-4) */}
                <div className="flex space-x-4">
                  {navLinks.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      ref={(el) => (linkRefs.current[index] = el)}
                      onClick={(e) => handleLinkClick(e, index)}
                      className={`hidden lg:inline-block text-white text-base target:underline hover:text-white transition-colors px-3 py-2 rounded-md relative z-10 ${
                        activeIndex === index ? "text-white font-bold" : ""
                      }`}
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Botón derecha */}
          <div className="flex-shrink-0">
            <div className="hidden llg:block mr-[20px] mg:mr-[80px] xl:mr-28">
              <Link
                href="/contact"
                className={`transition-all duration-300 bg-green text-white px-10 py-[14px] rounded-[8px] font-bold hover:bg-[#176221] ${
                  menuOpen ? "absolute bottom-4" : ""
                }`}
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-center llg:hidden">
            <Link
              href="/contact"
              className={`transition-all duration-300 bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 text-sm mr-4 llg:hidden ${
                menuOpen ? "absolute bottom-4" : ""
              }`}
            >
              Contact
            </Link>

            <div
              className="flex flex-col justify-between items-center w-[24px] h-[18px] cursor-pointer mx-[20px] llg:hidden z-[1000]"
              onClick={toggleMenu}
            >
              <div
                className={`h-[2px] w-full bg-white transition-transform duration-300 ${
                  menuOpen
                    ? "transform rotate-45 translate-y-[8px] mt-0"
                    : "mt-1"
                }`}
              />
              <div
                className={`h-[2px] w-full bg-white transition-transform duration-300 ${
                  menuOpen ? "transform -rotate-45 translate-y-[-8px]" : ""
                }`}
              />
            </div>
          </div>
        </div>

        {/* Overlay Mobile */}
        <div
          className={`z-[999] absolute navbar-background top-0 left-0 w-screen h-[100dvh] bg-blue-600 bg-opacity-100 transition-transform duration-300 ease-in-out transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ willChange: "transform" }}
        >
          <div className="flex items-center justify-between mr-[78px] h-[72px] ml-5">
            <Link href="/" onClick={closeMenu}>
              {/* FIX: usar Logo.src para que cargue igual que arriba */}
              <img src={Logo.src} alt="Logo" className="w-[120px]" />
            </Link>
          </div>

          <div className="flex flex-col mb-10 absolute bottom-0 z-100">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-white py-3 px-5 text-xl font-semibold hover:bg-blue-700 transition-colors"
                onClick={closeMenu}
              >
                {item.text.toUpperCase()}
              </Link>
            ))}

            <div className="pt-11 flex justify-center w-screen">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors absolute bottom-10 left-1/2 transform -translate-x-1/2"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
