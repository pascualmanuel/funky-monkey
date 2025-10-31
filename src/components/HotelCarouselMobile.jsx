"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ArrowLeft from "../assets/prev.svg";
import ArrowRight from "../assets/next.svg";
import GalleryModal from "./GalleryModal";
import cloudinaryImages from "../../public/cloudinary-images.json";

export default function HotelCarouselMobile({ images }) {
  const allSlides = images || cloudinaryImages;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryCurrentIndex, setGalleryCurrentIndex] = useState(0);
  const [failedImages, setFailedImages] = useState(new Set());
  const checkedImagesRef = useRef(new Set());

  const touchStartXRef = useRef(0);
  const touchDeltaXRef = useRef(0);

  // Filtrar imágenes que fallaron al cargar
  const slides = allSlides.filter((slide) => !failedImages.has(slide.src));

  const isPrevDisabled = currentIndex <= 0;
  const isNextDisabled = currentIndex >= slides.length - 1;

  const next = () => {
    if (!isNextDisabled) setCurrentIndex((i) => i + 1);
  };

  const prev = () => {
    if (!isPrevDisabled) setCurrentIndex((i) => i - 1);
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches?.[0]?.clientX || 0;
    touchDeltaXRef.current = 0;
  };

  const handleTouchMove = (e) => {
    const x = e.touches?.[0]?.clientX || 0;
    touchDeltaXRef.current = x - touchStartXRef.current;
  };

  const handleTouchEnd = () => {
    const threshold = 40; // simple swipe threshold
    if (touchDeltaXRef.current > threshold) {
      prev();
    } else if (touchDeltaXRef.current < -threshold) {
      next();
    }
    touchStartXRef.current = 0;
    touchDeltaXRef.current = 0;
  };

  const handleImageClick = () => {
    setGalleryCurrentIndex(currentIndex);
    setIsGalleryOpen(true);
  };

  // Manejar cuando una imagen falla al cargar
  const handleImageError = (imageSrc) => {
    setFailedImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(imageSrc);
      return newSet;
    });
  };

  // Verificar imágenes al cargar el componente y cuando cambien
  useEffect(() => {
    // Solo ejecutar en el cliente (navegador)
    if (typeof window === "undefined") return;

    const checkImages = () => {
      allSlides.forEach((slide) => {
        // Si ya verificamos esta imagen, no hacerlo de nuevo
        if (checkedImagesRef.current.has(slide.src)) return;
        // Si ya sabemos que esta imagen falló, no verificar de nuevo
        if (failedImages.has(slide.src)) {
          checkedImagesRef.current.add(slide.src);
          return;
        }

        // Marcar como verificada inmediatamente para evitar verificaciones duplicadas
        checkedImagesRef.current.add(slide.src);

        const img = new window.Image();
        img.onerror = () => {
          handleImageError(slide.src);
        };
        img.onload = () => {
          // Imagen cargó correctamente, no hacer nada
        };
        img.src = slide.src;
      });
    };

    checkImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allSlides]); // Verificar cuando cambien las imágenes

  // Ajustar currentIndex si las slides cambian debido a imágenes fallidas
  useEffect(() => {
    if (currentIndex >= slides.length && slides.length > 0) {
      setCurrentIndex(Math.max(0, slides.length - 1));
    }
  }, [slides.length, currentIndex]);

  const galleryImages = slides.map((s) => s.src);

  return (
    <>
      <div className="sm:hidden px-4">
        <div
          className="w-full overflow-hidden rounded-2xl h-[400px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slideItem, index) => (
              <div key={index} className="w-full flex-shrink-0 h-full relative">
                <Image
                  src={slideItem.src}
                  alt={slideItem.alt}
                  fill
                  className="object-cover cursor-pointer"
                  priority={index === 0 || index === 1}
                  onClick={handleImageClick}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-navigation flex justify-center items-center mt-6">
          <button
            className={`carousel-arrow carousel-arrow-left !border-1 !border-grey3 !rounded-[50%] ${
              isPrevDisabled ? "disabled" : ""
            }`}
            onClick={prev}
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
            onClick={next}
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
