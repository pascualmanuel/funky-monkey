"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function GalleryModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  roomTitle,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [imagesLoaded, setImagesLoaded] = useState(new Set());

  // Reset current index when modal opens with new initial index
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  // Pre-load images when modal opens (optimized)
  useEffect(() => {
    if (isOpen && images && images.length > 0) {
      // Solo ejecutar en el cliente (navegador)
      if (typeof window === "undefined") return;

      const preloadImages = () => {
        // Preload images in batches to avoid overwhelming the browser
        const batchSize = 3;
        const batches = [];

        for (let i = 0; i < images.length; i += batchSize) {
          batches.push(images.slice(i, i + batchSize));
        }

        batches.forEach((batch, batchIndex) => {
          setTimeout(() => {
            batch.forEach((imageSrc, index) => {
              const globalIndex = batchIndex * batchSize + index;
              const img = new window.Image();
              img.onload = () => {
                setImagesLoaded((prev) => new Set([...prev, globalIndex]));
              };
              img.src = imageSrc;
            });
          }, batchIndex * 100); // Stagger batches by 100ms
        });
      };

      preloadImages();
    }
  }, [isOpen, images]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          e.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  if (!isOpen || !images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#000000] opacity-94"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
        {/* Header with counter and close button */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 left-3 md:top-4 md:left-4 z-20 bg-black bg-opacity-60 hover:bg-opacity-80 active:bg-opacity-90 text-white w-12 h-12 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-200 touch-manipulation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Main image container */}
        <div className="relative w-full max-w-4xl h-full max-h-[70vh] flex items-center justify-center">
          {/* Previous button */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-[-64px] z-20 bg-black bg-opacity-60 hover:bg-opacity-80 active:bg-opacity-90 text-white w-14 h-14 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 touch-manipulation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Main image */}
          <div className="relative w-full h-full">
            {!imagesLoaded.has(currentIndex) && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="spin-loader"></div>
              </div>
            )}
            <Image
              src={images[currentIndex]}
              alt={`${roomTitle} - Image ${currentIndex + 1}`}
              fill
              className={`object-contain transition-opacity duration-300 ${
                imagesLoaded.has(currentIndex) ? "opacity-100" : "opacity-0"
              }`}
              priority
              onLoad={() => {
                setImagesLoaded((prev) => new Set([...prev, currentIndex]));
              }}
            />
          </div>

          {/* Next button */}
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-[-64px] z-20 bg-black bg-opacity-60 hover:bg-opacity-80 active:bg-opacity-90 text-white w-14 h-14 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 touch-manipulation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex gap-1 md:gap-2 bg-black bg-opacity-60 p-1 md:p-2 rounded-lg max-w-[90vw] overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all duration-200 flex-shrink-0 touch-manipulation ${
                    index === currentIndex
                      ? "ring-2 ring-white ring-opacity-80"
                      : "opacity-60 hover:opacity-80 active:opacity-90"
                  }`}
                >
                  {!imagesLoaded.has(index) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                      <div className="spin-loader"></div>
                    </div>
                  )}
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-300 ${
                      imagesLoaded.has(index) ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => {
                      setImagesLoaded((prev) => new Set([...prev, index]));
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
