"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import SantaTeresaImage from "@/assets/santa-teresa/santa-teresa.webp";
import TheHotelImage from "@/assets/the-hotel/the-hotel.webp";
import RoomsImage from "@/assets/home/rooms.webp";
import ActivitiesImage from "@/assets/activities/activities.webp";
import RetreatsImage from "@/assets/retreats/retreats.webp";
import OffersImage from "@/assets/offers/offers.webp";

const heroes = {
  "/santa-teresa": SantaTeresaImage.src,
  "/hotel": TheHotelImage.src,
  "/rooms": RoomsImage.src,
  "/activities": ActivitiesImage.src,
  "/retreats": RetreatsImage.src,
  "/offers": OffersImage.src,
};

const HeroImagePreloader = () => {
  const pathname = usePathname();
  useEffect(() => {
    // Only warm the current page's CSS background. Activity detail heroes have
    // a responsive preload and need no second, client-side preload.
    const src = heroes[pathname];
    if (src) {
      const image = new window.Image();
      image.src = src;
    }
  }, [pathname]);
  return null;
};

export default HeroImagePreloader;
