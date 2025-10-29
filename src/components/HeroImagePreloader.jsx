"use client";
import { useEffect } from "react";

import SantaTeresaImage from "@/assets/santa-teresa/santa-teresa.webp";
import TheHotelImage from "@/assets/the-hotel/the-hotel.webp";
import RoomsImage from "@/assets/home/rooms.webp";
import ActivitiesImage from "@/assets/activities/activities.webp";
import RetreatsImage from "@/assets/retreats/retreats.webp";
import OffersImage from "@/assets/offers/offers.webp";

const HeroImagePreloader = () => {
  useEffect(() => {
    const heroImages = [
      SantaTeresaImage.src,
      TheHotelImage.src,
      RoomsImage.src,
      ActivitiesImage.src,
      RetreatsImage.src,
      OffersImage.src,
    ];

    // Función para precargar una imagen
    const preloadImage = (src, index) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          resolve(img);
        };
        img.onerror = (error) => {
          reject(error);
        };
        img.src = src;
      });
    };

    // Precargar todas las imágenes hero
    const preloadAllHeroImages = async () => {
      try {
        await Promise.all(
          heroImages.map((src, index) => preloadImage(src, index))
        );
      } catch (error) {
        // Some hero images failed to preload
      }
    };

    // Ejecutar la precarga
    preloadAllHeroImages();
  }, []);

  // Este componente no renderiza nada visual
  return null;
};

export default HeroImagePreloader;
