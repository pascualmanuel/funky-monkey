"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowLeft from "../assets/prev.svg";
import ArrowRight from "../assets/next.svg";
import GalleryModal from "./GalleryModal";
import cloudinaryImages from "../../public/cloudinary-images.json";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryCurrentIndex, setGalleryCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);
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

  // Usar imágenes de Cloudinary
  const slides = images || cloudinaryImages;

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
    const maxWidth = containerWidth * 0.9;

    for (let i = currentIndex; i < slides.length; i++) {
      const slide = slides[i];
      const slideWidth = getSlideWidth(slide);

      // Si agregar esta imagen excede el límite, verificar si es la última imagen
      if (totalWidth + slideWidth > maxWidth) {
        // Si es la última imagen, incluirla de todas formas para que se vea completa
        if (i === slides.length - 1) {
          totalWidth += slideWidth;
          visibleSlides++;
        }
        break;
      }

      totalWidth += slideWidth;
      visibleSlides++;
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

  // Calcular maxIndex considerando que la última imagen debe mostrarse completamente
  const calculateMaxIndex = () => {
    if (slides.length <= 1) return 0;

    // Calcular cuántas imágenes caben en el espacio visible
    let totalWidth = 0;
    let maxSlides = 0;
    const maxWidth = containerWidth * 0.9;

    for (let i = 0; i < slides.length; i++) {
      const slideWidth = getSlideWidth(slides[i]);

      if (totalWidth + slideWidth <= maxWidth) {
        totalWidth += slideWidth;
        maxSlides++;
      } else {
        break;
      }
    }

    // El maxIndex es el último índice desde donde podemos mostrar al menos una imagen completa
    return Math.max(0, slides.length - maxSlides);
  };

  const maxIndex = calculateMaxIndex();

  const isPrevDisabled = currentIndex <= 0;
  const isNextDisabled = currentIndex >= maxIndex;

  const nextSlide = () => {
    if (!isNextDisabled && carouselRef.current) {
      const nextSlideWidth = getSlideWidth(slides[currentIndex + 1]) + 12; // +12 for margin
      carouselRef.current.scrollBy({
        left: nextSlideWidth,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    if (!isPrevDisabled && carouselRef.current) {
      const prevSlideWidth = getSlideWidth(slides[currentIndex - 1]) + 12; // +12 for margin
      carouselRef.current.scrollBy({
        left: -prevSlideWidth,
        behavior: "smooth",
      });
    }
  };

  const handleImageClick = (clickedIndex) => {
    // Solo abrir la galería si no hubo drag significativo
    if (!hasDragged) {
      setGalleryCurrentIndex(clickedIndex);
      setIsGalleryOpen(true);
    }
  };

  // Prepare images array for GalleryModal
  const galleryImages = slides.map((slide) => slide.src);

  // Helper para obtener clientX de mouse o touch events
  const getClientX = (e) => {
    if (e.type.includes("mouse")) {
      return e.clientX;
    }
    return e.touches?.[0]?.clientX || e.changedTouches?.[0]?.clientX || 0;
  };

  // Manejadores de drag
  const handleDragStart = (e) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(getClientX(e));
    setStartScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleDragMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();

    const x = getClientX(e);
    const walk = startX - x; // Invertido para que el drag sea natural

    // Marcar como dragged si el movimiento es mayor a 5px
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }

    carouselRef.current.scrollLeft = startScrollLeft + walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Resetear hasDragged después de un pequeño delay
    setTimeout(() => {
      setHasDragged(false);
    }, 100);
  };

  // Track scroll position to update currentIndex
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      let accumulatedWidth = 0;
      let newIndex = 0;

      for (let i = 0; i < slides.length; i++) {
        const slideWidth = getSlideWidth(slides[i]) + 12; // +12 for margin
        if (scrollLeft >= accumulatedWidth + slideWidth / 2) {
          newIndex = i;
        } else {
          break;
        }
        accumulatedWidth += slideWidth;
      }

      setCurrentIndex(newIndex);
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [slides, containerWidth, isMobileDevice]);

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

  return (
    <>
      <div className="">
        <div className="carousel-container ">
          <div className="carousel-wrapper pt-14 ">
            <div
              ref={carouselRef}
              className="carousel"
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
              style={{
                display: "flex",
                overflowX: "scroll",
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
                cursor: isDragging ? "grabbing" : "grab",
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
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(index)}
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

        <div className="carousel-navigation flex justify-center sm:justify-end items-center mt-10 sm:mr-15 ">
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

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={galleryImages}
        initialIndex={galleryCurrentIndex}
        roomTitle="Hotel Gallery"
      />
    </>
  );
}
