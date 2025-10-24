"use client";

import { useEffect, useState, useRef } from "react";

// Import all hero images
import SantaTeresa from "@/assets/santa-teresa/santa-teresa.webp";
import TheHotelImage from "@/assets/the-hotel/the-hotel.webp";
import RetreatsImage from "@/assets/retreats/retreats.webp";
import ActivitiesImage from "@/assets/activities/activities.webp";
import CarouselImage from "@/assets/offers/offers.webp";
import RoomsImage from "@/assets/home/rooms.webp";

export default function HeroPreloader() {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isPreloading, setIsPreloading] = useState(false);
  const timeoutRef = useRef(null);

  // Define all hero images with their metadata
  const heroImages = [
    {
      src: SantaTeresa.src,
      name: "santa-teresa",
      priority: 1, // High priority - likely to be visited
    },
    {
      src: TheHotelImage.src,
      name: "hotel",
      priority: 2,
    },
    {
      src: RetreatsImage.src,
      name: "retreats",
      priority: 3,
    },
    {
      src: ActivitiesImage.src,
      name: "activities",
      priority: 4,
    },
    {
      src: CarouselImage.src,
      name: "offers",
      priority: 5,
    },
    {
      src: RoomsImage.src,
      name: "rooms",
      priority: 6,
    },
  ];

  const preloadImage = (imageSrc, name) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages((prev) => new Set([...prev, name]));
        resolve();
      };
      img.onerror = () => {
        console.warn(`Failed to preload hero image: ${name}`);
        reject(new Error(`Failed to load: ${name}`));
      };
      img.src = imageSrc;
    });
  };

  const startPreloading = () => {
    if (isPreloading) return;

    setIsPreloading(true);

    // Sort by priority
    const sortedImages = [...heroImages].sort(
      (a, b) => a.priority - b.priority
    );

    // Preload in batches with delays to avoid blocking
    const batchSize = 2;
    const batchDelay = 300; // 300ms between batches

    sortedImages.forEach((image, index) => {
      const batchIndex = Math.floor(index / batchSize);
      const delay = batchIndex * batchDelay;

      setTimeout(() => {
        preloadImage(image.src, image.name).catch((error) => {
          console.warn(`Preload failed for ${image.name}:`, error);
        });
      }, delay);
    });
  };

  useEffect(() => {
    // Start preloading after a delay to not interfere with initial page load
    timeoutRef.current = setTimeout(() => {
      startPreloading();
    }, 2000); // Wait 2 seconds after page load

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Optional: Log preload progress in development
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log(
        `Hero images loaded: ${loadedImages.size}/${heroImages.length}`
      );
    }
  }, [loadedImages.size, heroImages.length]);

  // This component doesn't render anything
  return null;
}
