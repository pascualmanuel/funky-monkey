"use client";
import { useEffect } from "react";

// Importar todas las imágenes hero
import SantaTeresaImage from "@/assets/santa-teresa/santa-teresa.webp";
import TheHotelImage from "@/assets/the-hotel/the-hotel.webp";
import RoomsImage from "@/assets/home/rooms.webp";
import ActivitiesImage from "@/assets/activities/activities.webp";
import RetreatsImage from "@/assets/retreats/retreats.webp";
import OffersImage from "@/assets/offers/offers.webp";

const HeroImagePreloader = () => {
  useEffect(() => {
    // Array con todas las imágenes hero que necesitamos precargar
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
          console.log(
            `✅ Hero image ${index + 1}/6 loaded: ${src.split("/").pop()}`
          );
          resolve(img);
        };
        img.onerror = (error) => {
          console.error(
            `❌ Failed to load hero image ${index + 1}/6: ${src
              .split("/")
              .pop()}`,
            error
          );
          reject(error);
        };
        img.src = src;
      });
    };

    // Precargar todas las imágenes hero
    const preloadAllHeroImages = async () => {
      console.log("🚀 Starting hero images preload...");
      try {
        await Promise.all(
          heroImages.map((src, index) => preloadImage(src, index))
        );
        console.log(
          "✅ All 6 hero images preloaded successfully! Users will have instant navigation experience."
        );
      } catch (error) {
        console.warn("⚠️ Some hero images failed to preload:", error);
      }
    };

    // Ejecutar la precarga
    preloadAllHeroImages();
  }, []);

  // Este componente no renderiza nada visual
  return null;
};

export default HeroImagePreloader;
