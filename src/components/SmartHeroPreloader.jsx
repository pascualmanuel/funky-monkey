"use client";

import { useEffect, useState, useRef } from "react";

// Import all hero images
import SantaTeresa from "@/assets/santa-teresa/santa-teresa.webp";
import TheHotelImage from "@/assets/the-hotel/the-hotel.webp";
import RetreatsImage from "@/assets/retreats/retreats.webp";
import ActivitiesImage from "@/assets/activities/activities.webp";
import CarouselImage from "@/assets/offers/offers.webp";
import RoomsImage from "@/assets/home/rooms.webp";

export default function SmartHeroPreloader() {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isPreloading, setIsPreloading] = useState(false);
  const timeoutRef = useRef(null);
  const observerRef = useRef(null);

  // Define all hero images with their metadata
  const heroImages = [
    {
      src: SantaTeresa.src,
      name: "santa-teresa",
      priority: 1,
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

  const setupIntersectionObserver = () => {
    if (observerRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageName = entry.target.dataset.page;
            const image = heroImages.find((img) => img.name === pageName);

            if (image && !loadedImages.has(image.name)) {
              preloadImage(image.src, image.name).catch((error) => {
                console.warn(`Preload failed for ${image.name}:`, error);
              });
            }
          }
        });
      },
      {
        rootMargin: "50px", // Start preloading when nav is 50px away
        threshold: 0.1,
      }
    );
  };

  const observeNavigationLinks = () => {
    const navLinks = document.querySelectorAll(
      'a[href*="/santa-teresa"], a[href*="/hotel"], a[href*="/retreats"], a[href*="/activities"], a[href*="/offers"], a[href*="/rooms"]'
    );

    if (navLinks.length === 0) {
      // Retry after 500ms if no links found
      setTimeout(observeNavigationLinks, 500);
      return;
    }

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      let pageName = "";

      if (href.includes("/santa-teresa")) pageName = "santa-teresa";
      else if (href.includes("/hotel")) pageName = "hotel";
      else if (href.includes("/retreats")) pageName = "retreats";
      else if (href.includes("/activities")) pageName = "activities";
      else if (href.includes("/offers")) pageName = "offers";
      else if (href.includes("/rooms")) pageName = "rooms";

      if (pageName && observerRef.current) {
        link.dataset.page = pageName;
        observerRef.current.observe(link);
      }
    });
  };

  const startIntelligentPreloading = () => {
    if (isPreloading) return;

    setIsPreloading(true);

    // Setup intersection observer
    setupIntersectionObserver();

    // Observe navigation links with retry logic
    observeNavigationLinks();

    // Preload high-priority images after a delay
    setTimeout(() => {
      const highPriorityImages = heroImages
        .filter((img) => img.priority <= 2)
        .filter((img) => !loadedImages.has(img.name));

      highPriorityImages.forEach((image, index) => {
        setTimeout(() => {
          preloadImage(image.src, image.name).catch((error) => {
            console.warn(`Preload failed for ${image.name}:`, error);
          });
        }, index * 500); // Stagger by 500ms
      });
    }, 2000); // Wait 2 seconds instead of 3
  };

  useEffect(() => {
    // Start intelligent preloading after page is fully loaded
    const handleLoad = () => {
      timeoutRef.current = setTimeout(() => {
        startIntelligentPreloading();
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener("load", handleLoad);
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
