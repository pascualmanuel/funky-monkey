"use client";
import { useState, useRef, useEffect } from "react";
import React from "react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import ArrowCarousel from "@/assets/carousel-arrow.svg";
import CarouselImage from "@/assets/offers/offers.webp";
import InstagramBg from "@/assets/offers/instagram-bg.png";
import Jungle from "@/assets/santa-teresa/jungle.webp";
import Yoga from "@/assets/retreats/retreats-4.webp";
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

  const carouselData = [
    {
      image: CarouselImage,
      title: "From 50% OFF month",
      description:
        "Long term stays - 30 nights + relax to the max enjoy free high speed internet in each room",
      voucher: "Use voucher: 50MONTH",
      buttonText: "Get this offer",
      buttonLink: "/contact",
    },
    {
      image: Yoga,
      title: "SILK Retreat 2025",
      description:
        "FEB  - MAR  / HOSTED BY FLY TIME RETREATS / office@funkymonkeylodge.com 10% DISCOUNT FOR PARTICIPANTS",
      voucher: "Use voucher: WEEKEND3",
      buttonText: "Book Now",
      buttonLink: "/contact",
    },
    {
      image: Jungle,
      title: "10% OFF week",
      description:
        "GET A DISCOUNT ON TOP OF OUR RATES   FOR WEEK / 7 NGHTS STAY FROM 08.04 TILL 15.12 /  Use VOUCHER: FUNKY24 - only direct reservations!",
      voucher: "Use voucher: EARLY30",
      buttonText: "Reserve Today",
      buttonLink: "/contact",
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.corsproxy.io/?${encodeURIComponent(
        "https://funkymonkeylodge.com/wp-json/offers/v1/list"
      )}`
    )
      .then((r) => {
        if (!r.ok) {
          throw new Error(`HTTP error! status: ${r.status}`);
        }
        return r.text();
      })
      .then((text) => {
        const data = JSON.parse(text);
        setData(data);
      })
      .catch((err) => {
        console.error("Error fetching offers:", err);
      });
  }, []);

  console.log(data[0], "data offers");
  const currentRef = useRef(null);
  const prevRef = useRef(null);

  const startTransition = (toIndex, dir) => {
    setSlideDirection(dir);
    setPrevSlide(currentSlide); // mostramos la capa anterior
    setCurrentSlide(toIndex); // seteamos la nueva
    // limpiamos la anterior al terminar la animación
    setTimeout(() => setPrevSlide(null), DURATION);
  };

  const nextSlide = () =>
    startTransition((currentSlide + 1) % carouselData.length, "right");

  const prevSlideFn = () =>
    startTransition(
      (currentSlide - 1 + carouselData.length) % carouselData.length,
      "left"
    );

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

  const currentData = carouselData[currentSlide];

  return (
    <Layout title="Special Offers">
      {/* contenedor del carrusel */}
      <div className="min-h-[680px] md:min-h-[600px] md:h-[100dvh] relative max-h-[850px] overflow-hidden bg-black">
        {/* capa anterior (sale) */}
        {prevSlide !== null && (
          <Slide ref={prevRef} data={carouselData[prevSlide]} />
        )}

        {/* capa actual (entra) */}
        <Slide ref={currentRef} data={currentData} />

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
  return (
    <div
      ref={ref}
      className="absolute inset-0 flex flex-col justify-center items-center w-full will-change-transform"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 127.49%), url("${data.image.src}")`,
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
        <p className="body1 text-center text-white mx-5 md:mx-0 max-w-[650px] mt-6">
          {data.voucher}
        </p>
        <Button
          variant="primary"
          classNames="w-[155px] h-[50px] mt-10"
          link={data.buttonLink}
        >
          {data.buttonText}
        </Button>
      </div>
    </div>
  );
});
