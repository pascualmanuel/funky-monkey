"use client";
import { useState, useRef, useEffect } from "react";
import React from "react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import ArrowCarousel from "@/assets/carousel-arrow.svg";
import InstagramBg from "@/assets/offers/instagram-bg.png";
import Faqs from "@/components/Faqs";
import PreFooter from "@/components/PreFooter";
import Link from "next/link";
export default function Offers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null); // capa anterior visible para animar salida
  const [slideDirection, setSlideDirection] = useState("right");
  const DURATION = 500;

  // useEffect(() => {
  //   fetch("https://api.beds24.com/v2/properties?includeAllRooms=true", {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       token: process.env.NEXT_PUBLIC_BEDS24_API_KEY, // ✅ correcto
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data, "DATA"))
  //     .catch((err) => console.error("Error:", err));
  // }, []);

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Llamás al endpoint de tu plugin WordPress, no al de Beds24 directamente
    fetch(
      "https://funkymonkeylodge.com/wp-json/beds24/v2/properties-rooms?fwedaxs"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProperties(data.data[0].roomTypes);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching rooms:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  console.log(properties, "properties");

  const WORDPRESS_URL =
    "https://backend.funkymonkeylodge.com/funkymonkeylodge.com";
  const [offers, setOffers] = useState([]);
  const [loadingOffers, setLoadingOffers] = useState(true);

  // Cargar ofertas desde la API
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const timestamp = Date.now();
        const response = await fetch(
          `${WORDPRESS_URL}/wp-json/offers/v1/list?t=${timestamp}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const offersArray = Array.isArray(data) ? data : [];
        setOffers(offersArray);

        // Resetear currentSlide si las nuevas ofertas son menos que el índice actual
        if (offersArray.length > 0 && currentSlide >= offersArray.length) {
          setCurrentSlide(0);
        }
      } catch (err) {
        console.error("Error fetching offers:", err);
        setOffers([]); // Si falla, usar array vacío para evitar errores
      } finally {
        setLoadingOffers(false);
      }
    };

    fetchOffers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const currentRef = useRef(null);
  const prevRef = useRef(null);

  const startTransition = (toIndex, dir) => {
    setSlideDirection(dir);
    setPrevSlide(currentSlide); // mostramos la capa anterior
    setCurrentSlide(toIndex); // seteamos la nueva
    // limpiamos la anterior al terminar la animación
    setTimeout(() => setPrevSlide(null), DURATION);
  };

  // Usar ofertas como datos del carousel
  const carouselData = offers.length > 0 ? offers : [];

  const nextSlide = () => {
    if (carouselData.length === 0) return;
    startTransition((currentSlide + 1) % carouselData.length, "right");
  };

  const prevSlideFn = () => {
    if (carouselData.length === 0) return;
    startTransition(
      (currentSlide - 1 + carouselData.length) % carouselData.length,
      "left"
    );
  };

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    startTransition(index, index > currentSlide ? "right" : "left");
  };

  // Corre la animación cada vez que hay una capa anterior + una actual
  useEffect(() => {
    const curr = currentRef.current;
    const prev = prevRef.current;
    if (!curr) return;

    // Evitá animar en el primer render (no hay prev)
    if (prevSlide === null || !prev) return;

    const dir = slideDirection === "right" ? 1 : -1;

    // animamos la capa que ENTRA
    const inAnim = curr.animate(
      [
        { transform: `translateX(${100 * dir}%)` },
        { transform: "translateX(0%)" },
      ],
      {
        duration: DURATION,
        easing: "cubic-bezier(.22,.61,.36,1)",
        fill: "forwards",
      }
    );

    // animamos la capa que SALE
    const outAnim = prev.animate(
      [
        { transform: "translateX(0%)" },
        { transform: `translateX(${-100 * dir}%)` },
      ],
      {
        duration: DURATION,
        easing: "cubic-bezier(.22,.61,.36,1)",
        fill: "forwards",
      }
    );

    // limpieza por si desmonta en medio
    return () => {
      inAnim?.cancel?.();
      outAnim?.cancel?.();
    };
  }, [currentSlide, prevSlide, slideDirection]);

  const currentData = carouselData[currentSlide] || null;

  // Si no hay ofertas, mostrar loading o mensaje
  if (loadingOffers) {
    return (
      <Layout title="Special Offers">
        <div className="min-h-[680px] md:min-h-[600px] md:h-[100dvh] relative max-h-[850px] overflow-hidden bg-black flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      </Layout>
    );
  }

  if (carouselData.length === 0) {
    return (
      <Layout title="Special Offers">
        <div className="min-h-[680px] md:min-h-[600px] md:h-[100dvh] relative max-h-[850px] overflow-hidden bg-black flex items-center justify-center">
          <p className="body1 text-white text-center">
            No hay ofertas disponibles en este momento
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Special Offers">
      {/* contenedor del carrusel */}
      <div className="min-h-[680px] md:min-h-[600px] md:h-[100dvh] relative max-h-[850px] overflow-hidden bg-black">
        {/* capa anterior (sale) */}
        {prevSlide !== null && prevSlide < carouselData.length && (
          <Slide ref={prevRef} data={carouselData[prevSlide]} />
        )}

        {/* capa actual (entra) */}
        {currentData && <Slide ref={currentRef} data={currentData} />}

        {/* Controles */}
        <div className="body1 text-center text-white mx-5 md:mx-0 max-w-[450px] absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          <button
            onClick={prevSlideFn}
            className="mr-10 hover:opacity-70 cursor-pointer transition-opacity"
          >
            <img src={ArrowCarousel.src} alt="Previous" />
          </button>

          <div className="flex items-center gap-3">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-[7px] h-[7px] rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-white opacity-30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="rotate-180 ml-10 hover:opacity-70 cursor-pointer transition-opacity"
          >
            <img src={ArrowCarousel.src} alt="Next" />
          </button>
        </div>
      </div>
      {/* Newsletter ... */}

      <div className="mx-4 sm:mx-8 lg:mx-[70px]">
        <h3 className="myH2 text-center mt-[80px]">
          {" "}
          Don&apos;t miss any offer
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 mx-auto max-w-[770px]">
          <div>
            <p className="subH2 mb-6">Suscribe to our newsletter</p>
            <input
              type="email"
              className="bg-[#9797971A] rounded-md px-4 py-3"
              placeholder="Enter your email..."
            />
            <button className="bg-green text-white font-bold px-4 py-3 rounded-md ml-2">
              Subscribe
            </button>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="subH2">Follow us</p>
            <div className="flex items-center gap-3 mt-6">
              <Link
                href="https://www.instagram.com/funkymonkeysurfyoga"
                target="_blank"
                rel="noopener"
                className="bg-[#9797971A] rounded-md px-10 py-4 text-center text-white font-bold"
                style={{
                  backgroundImage: `url(${InstagramBg.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                Instagram
              </Link>
              <Link
                href="https://www.facebook.com/funkymonkeylodge"
                target="_blank"
                rel="noopener"
              >
                <div className="bg-[#0766FF] rounded-md px-10 py-4 text-center text-white font-bold">
                  Facebook
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PreFooter />

      {/* <Faqs /> */}
    </Layout>
  );
}

const Slide = React.forwardRef(function Slide({ data }, ref) {
  if (!data) return null;

  // La API devuelve image como URL string, no como objeto con .src
  const imageUrl =
    typeof data.image === "string" ? data.image : data.image?.src || "";

  return (
    <div
      ref={ref}
      className="absolute inset-0 flex flex-col justify-center items-center w-full will-change-transform"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 127.49%), url("${imageUrl}")`,
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // IMPORTANTE: no usar 'fixed' en un nodo animado; evita flashes y glitches
        backgroundAttachment: "scroll",
        transform: "translateZ(0)",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="myH1 text-center text-white max-w-[600px]">
          {data.title}
        </h2>
        <p className="body1 text-center text-white mx-5 md:mx-0 max-w-[650px] mt-10">
          {data.description}
        </p>
        {data.voucher && (
          <p className="body1 text-center text-white mx-5 md:mx-0 max-w-[650px] mt-6">
            {data.voucher}
          </p>
        )}
        {data.buttonText && data.buttonLink && (
          <Button
            variant="primary"
            classNames="w-[155px] h-[50px] mt-10"
            link={data.buttonLink}
          >
            {data.buttonText}
          </Button>
        )}
      </div>
    </div>
  );
});
