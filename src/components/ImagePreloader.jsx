"use client";

import { useEffect, useRef, useState } from "react";

export default function ImagePreloader({ images, onImagesLoaded }) {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    if (!images || images.length === 0) return;

    // Create intersection observer for intelligent preloading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            preloadImage(images[index], index);
          }
        });
      },
      {
        rootMargin: "100px", // Start preloading when image is 100px away from viewport
        threshold: 0.1,
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [images]);

  const preloadImage = (imageSrc, index) => {
    if (loadedImages.has(index)) return;

    const img = new Image();
    img.onload = () => {
      setLoadedImages((prev) => {
        const newSet = new Set([...prev, index]);
        onImagesLoaded?.(newSet);
        return newSet;
      });
    };
    img.onerror = () => {
      // Image failed to load
    };
    img.src = imageSrc;
  };

  // Create invisible elements for intersection observer
  return (
    <div className="hidden">
      {images.map((image, index) => (
        <div
          key={index}
          data-index={index}
          ref={(el) => {
            if (el && observerRef.current) {
              observerRef.current.observe(el);
            }
          }}
          className="w-1 h-1"
        />
      ))}
    </div>
  );
}
