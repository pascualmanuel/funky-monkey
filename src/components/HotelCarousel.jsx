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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryCurrentIndex, setGalleryCurrentIndex] = useState(0);
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
    if (!isNextDisabled) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (!isPrevDisabled) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
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
    setHasDragged(false);
    setStartX(getClientX(e));
    setCurrentTranslateX(calculateTranslateX(currentIndex));
  };

  const handleMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    if (e.type.startsWith("touch")) e.preventDefault();

    const currentX = getClientX(e);
    const diffX = currentX - startX;
    const translateX = currentTranslateX + diffX;

    // Marcar como drag si el movimiento es mayor a 10px
    if (Math.abs(diffX) > 10) {
      setHasDragged(true);
    }

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

    // Resetear el estado de drag después de un pequeño delay
    setTimeout(() => {
      setHasDragged(false);
    }, 100);
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
        <div className="carousel-container ">
          <div className="carousel-wrapper pt-14 ">
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
