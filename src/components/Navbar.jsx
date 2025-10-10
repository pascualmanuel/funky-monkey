"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../assets/f-monkey-logo.svg";
import Arrow from "../assets/arrow.svg";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  // UI state
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

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
  const rawIndex = isClient
    ? navLinks.findIndex((l) => l.link === pathname)
    : -1;
  const isRouteHidden = isClient ? HIDE_INDICATOR_ON.has(pathname) : true;
  const activeIndex =
    isClient && !isRouteHidden && rawIndex >= 0 ? rawIndex : null;

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

  // Establecer isClient después del montaje para evitar problemas de hidratación
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Al cambiar ruta: si no hay índice válido, ocultar; si hay, posicionar // CHANGED
  useEffect(() => {
    if (!isClient || isAnimating) return;
    if (activeIndex === null) {
      setIndicator((p) => ({ ...p, visible: false }));
      return;
    }
    const id = requestAnimationFrame(() => moveIndicatorTo(activeIndex));
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, isAnimating, activeIndex, isClient]);

  // Recalcular en resize/carga de fuentes (solo si hay índice válido) // CHANGED
  useEffect(() => {
    if (!isClient) return;

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
  }, [activeIndex, isClient]);

  // Mostrar/ocultar navbar por scroll
  useEffect(() => {
    if (!isClient) return;

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
  }, [lastScrollY, isClient]);

  const toggleMenu = () => setMenuOpen((s) => !s);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div
      className={`navbar fixed z-[1000] w-full
      ${isVisible ? "navbar-visible z-50" : "navbar-hidden"}
      ${menuOpen ? "!h-[100dvh]" : "h-[130px] lg:h-[102px]"}
    `}
      style={{
        background: menuOpen ? "rgba(0, 0, 0, 0.8)" : "rgba(48, 48, 48, 0.5)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        // transition: "height 300ms ease",
      }}
    >
      <nav
        className={`relative ${
          menuOpen ? "h-[100dvh]" : "h-[130px] lg:h-[102px]"
        }`}
      >
        <div className="h-[130px] lg:h-[102px] mx-auto max-w-screen-2xl flex items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="ml-[20px] mg:ml-[80px] xl:ml-28">
              <img
                src={Logo.src}
                alt="Logo"
                className="w-[110px] md:w-[160px]"
              />
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
                <div className="flex llg:space-x-4">
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

          {/* Botón derecha - Desktop */}
          <div className="flex-shrink-0">
            <div className="hidden lg:block mr-[20px] mg:mr-[80px] xl:mr-28">
              <Link
                href="https://beds24.com/booking2.php?propid=63844"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 bg-green text-white px-10 py-[14px] rounded-[8px] font-bold hover:bg-[#176221]"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-center lg:hidden mr-[22px]">
            <Link
              href="https://beds24.com/booking2.php?propid=63844"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 bg-green text-white px-5 py-3 rounded-lg font-bold hover:bg-[#176221] text-[16px] mr-4"
            >
              Book Now
            </Link>
            {/*  */}
            <div
              onClick={toggleMenu}
              className="bg-[#FFFFFF0D] cursor-pointer w-[50px] h-[50px] flex items-center justify-center rounded-full z-[1000]"
            >
              <div className="flex flex-col justify-between items-center w-[24px] h-[14px] cursor-pointer ">
                <div
                  className={`h-[2px] w-full bg-white rounded-full  transition-transform duration-300 ${
                    menuOpen
                      ? "transform rotate-45 translate-y-[7px] mt-0"
                      : "mt-1"
                  }`}
                />
                <div
                  className={`h-[2px] w-full bg-white rounded-full  transition-transform duration-300 ${
                    menuOpen ? "transform -rotate-45 translate-y-[-5px]" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Overlay Mobile */}

        <div
          className={`
    lg:hidden px-6 
    transition-all duration-300
    flex flex-col justify-end h-[100dvh] pb-12
    ${
      menuOpen
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-2 pointer-events-none"
    }
  `}
          style={{ overflowY: "auto", maxHeight: "calc(100dvh - 102px)" }} // debajo del header
        >
          <nav className="flex flex-col gap-5 mt-4">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={(e) => {
                  // si querés animación de indicador en mobile, podés llamar handleLinkClick(e, index)
                  closeMenu();
                }}
                className="text-white text-[20px] font-semibold  flex items-center myH3"
              >
                {item.text}
                <img src={Arrow.src} className="ml-4" alt="Arrow" />
              </Link>
            ))}
          </nav>

          <div className="mt-6">
            <Link
              href="https://beds24.com/booking2.php?propid=63844"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block text-center bg-green text-white px-6 py-3 rounded-lg font-bold hover:bg-[#176221]"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
