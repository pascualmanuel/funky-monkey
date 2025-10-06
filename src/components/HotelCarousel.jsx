"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowLeft from "../assets/prev.svg";
import ArrowRight from "../assets/next.svg";

import Carousel7 from "../assets/rooms/room-7.webp";
import Carousel8 from "../assets/rooms/room-8.webp";
import Carousel9 from "../assets/rooms/room-9.webp";

import Carousel1 from "../assets/home/rooms.webp";
import Carousel2 from "../assets/home/activities.webp";
import Carousel3 from "../assets/home/location.webp";
import Carousel4 from "../assets/home/offer-2.webp";
import Carousel5 from "../assets/home/retreats.webp";
import Carousel6 from "../assets/home/the-hotel.webp";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const carouselRef = useRef(null);

  // Configuración de tamaños de imagen
  const imageSizeConfig = {
    large: {
      width: 1024,
      aspectRatio: "4/3",
      mobileWidth: 320, // Ancho específico para mobile
    },
    medium: {
      width: 700,
      aspectRatio: "3/2",
      mobileWidth: 280, // Ancho específico para mobile
    },
    small: {
      width: 400,
      aspectRatio: "1/1",
      mobileWidth: 240, // Ancho específico para mobile
    },
  };

  // Datos de ejemplo con diferentes tamaños
  const defaultImages = [
    { src: Carousel1, alt: "Hotel room 1", size: "large" },
    { src: Carousel2, alt: "Hotel room 2", size: "medium" },
    { src: Carousel3, alt: "Hotel room 3", size: "small" },
    { src: Carousel4, alt: "Hotel room 4", size: "large" },
    { src: Carousel5, alt: "Hotel room 5", size: "medium" },
    { src: Carousel6, alt: "Hotel room 6", size: "large" },
    { src: Carousel7, alt: "Hotel room 7", size: "small" },
    { src: Carousel8, alt: "Hotel room 8", size: "medium" },
    { src: Carousel9, alt: "Hotel room 9", size: "small" },
  ];

  const slides = images || defaultImages;

  // Función helper para obtener el ancho apropiado según el dispositivo
  const getSlideWidth = (slide) => {
    const config = imageSizeConfig[slide.size];

    // Si no tenemos containerWidth aún, usar valores por defecto
    if (!containerWidth) {
      return isMobileDevice ? config.mobileWidth : Math.min(config.width, 400);
    }

    if (isMobileDevice) {
      return config.mobileWidth;
    }

    // Para desktop, usar el ancho original pero con un mínimo
    const minWidth = Math.min(300, containerWidth * 0.7);
    return Math.min(config.width, Math.max(minWidth, containerWidth * 0.8));
  };

  // Calcular el ancho total de las imágenes visibles
  const calculateVisibleWidth = () => {
    if (!containerWidth) return { totalWidth: 0, visibleSlides: 1 };

    let totalWidth = 0;
    let visibleSlides = 0;

    for (let i = currentIndex; i < slides.length; i++) {
      const slide = slides[i];
      const slideWidth = getSlideWidth(slide);
      totalWidth += slideWidth;
      visibleSlides++;

      // Si ya no caben más slides, parar
      if (totalWidth >= containerWidth * 0.9) break;
    }

    return { totalWidth, visibleSlides };
  };

  useEffect(() => {
    const updateContainerWidth = () => {
      if (carouselRef.current) {
        const width = carouselRef.current.offsetWidth;
        // Asegurar que tenemos un ancho válido, usar window.innerWidth como fallback
        const finalWidth = width > 0 ? width : window.innerWidth;
        setContainerWidth(finalWidth);
      }

      // Detectar si es mobile
      setIsMobileDevice(window.innerWidth <= 768);
    };

    // Ejecutar inmediatamente
    updateContainerWidth();

    // Ejecutar después de un pequeño delay para asegurar que el DOM esté listo
    const timeoutId = setTimeout(updateContainerWidth, 100);

    window.addEventListener("resize", updateContainerWidth);
    return () => {
      window.removeEventListener("resize", updateContainerWidth);
      clearTimeout(timeoutId);
    };
  }, []);

  const { totalWidth, visibleSlides } = calculateVisibleWidth();
  const maxIndex = Math.max(0, slides.length - visibleSlides);

  const isPrevDisabled = currentIndex <= 0;
  const isNextDisabled = currentIndex >= maxIndex;

  const nextSlide = () => {
    if (!isNextDisabled) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (!isPrevDisabled) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const getClientX = (e) => {
    if (
      e &&
      typeof e === "object" &&
      ("touches" in e || "changedTouches" in e)
    ) {
      const t =
        (e.touches && e.touches[0]) ||
        (e.changedTouches && e.changedTouches[0]) ||
        null;
      return t ? t.clientX : 0;
    }
    return e?.clientX ?? 0;
  };

  // Calcular el translateX basado en los anchos reales de las imágenes
  const calculateTranslateX = (index) => {
    let translateX = 0;
    for (let i = 0; i < index; i++) {
      const slide = slides[i];
      const slideWidth = getSlideWidth(slide);
      translateX += slideWidth;
    }
    return -translateX;
  };

  const handleStart = (e) => {
    if (e.type.startsWith("touch")) e.preventDefault();
    setIsDragging(true);
    setStartX(getClientX(e));
    setCurrentTranslateX(calculateTranslateX(currentIndex));
  };

  const handleMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    if (e.type.startsWith("touch")) e.preventDefault();

    const currentX = getClientX(e);
    const diffX = currentX - startX;
    const translateX = currentTranslateX + diffX;

    carouselRef.current.style.transform = `translateX(${translateX}px)`;
    carouselRef.current.style.transition = "none";
  };

  const handleEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    const currentX = getClientX(e);
    const diffX = currentX - startX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0 && !isPrevDisabled) setCurrentIndex((p) => p - 1);
      else if (diffX < 0 && !isNextDisabled) setCurrentIndex((p) => p + 1);
      else setCurrentIndex(currentIndex);
    } else {
      setCurrentIndex(currentIndex);
    }

    if (carouselRef.current) {
      carouselRef.current.style.transition = "transform 0.4s ease-in-out";
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" && !isPrevDisabled) {
        prevSlide();
      } else if (e.key === "ArrowRight" && !isNextDisabled) {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPrevDisabled, isNextDisabled]);

  const translateX = calculateTranslateX(currentIndex);

  return (
    <>
      <div className="">
        <div className="carousel-container">
          <div className="carousel-wrapper pt-14">
            <div
              ref={carouselRef}
              className="carousel"
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
              style={{
                cursor: isDragging ? "grabbing" : "grab",
                transform: `translateX(${translateX}px)`,
                transition: isDragging ? "none" : "transform 0.4s ease-in-out",
              }}
            >
              {slides.map((slide, index) => {
                const config = imageSizeConfig[slide.size];
                const slideWidth = getSlideWidth(slide);

                return (
                  <div
                    key={index}
                    className={`carousel-slide ${
                      index === 0 ? "ml-0 md:ml-[100px]" : ""
                    }`}
                    data-size={slide.size}
                    style={{
                      width: `${slideWidth}px`,
                      aspectRatio: config.aspectRatio,
                      flexShrink: 0,
                      borderRadius: "16px",
                      overflow: "hidden",
                      marginRight: "12px",
                    }}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      className="carousel-image"
                      fill
                      sizes={`${slideWidth}px`}
                      priority={index < 3}
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="carousel-navigation ml-3 md:ml-[100px]">
          <button
            className={`carousel-arrow carousel-arrow-left !border-1 !border-grey3 !rounded-[50%] ${
              isPrevDisabled ? "disabled" : ""
            }`}
            onClick={prevSlide}
            disabled={isPrevDisabled}
            aria-label="Anterior"
          >
            <Image
              src={ArrowRight}
              alt="Anterior"
              width={8}
              height={12}
              className={isPrevDisabled ? "disabled" : ""}
            />
          </button>
          <button
            className={`carousel-arrow carousel-arrow-right !border-1 !border-grey3 !rounded-[50%] ${
              isNextDisabled ? "disabled" : ""
            }`}
            onClick={nextSlide}
            disabled={isNextDisabled}
            aria-label="Siguiente"
          >
            <Image
              src={ArrowLeft}
              alt="Siguiente"
              width={8}
              height={12}
              className={isNextDisabled ? "disabled" : ""}
            />
          </button>
        </div>
      </div>
    </>
  );
}
