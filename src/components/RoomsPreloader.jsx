"use client";

import { useEffect, useState } from "react";

export default function RoomsPreloader({ rooms }) {
  const [preloadedRooms, setPreloadedRooms] = useState(new Set());

  useEffect(() => {
    if (!rooms || rooms.length === 0) return;

    // Preload first 2 images of each room immediately
    const preloadPriorityImages = () => {
      rooms.forEach((room, roomIndex) => {
        if (room.images && room.images.length > 0) {
          // Preload first 2 images of each room
          const priorityImages = room.images.slice(0, 2);

          priorityImages.forEach((imageSrc, imageIndex) => {
            const img = new Image();
            img.onload = () => {
              setPreloadedRooms(
                (prev) => new Set([...prev, `${roomIndex}-${imageIndex}`])
              );
            };
            img.src = imageSrc;
          });
        }
      });
    };

    // Start preloading after a short delay to not block initial render
    const timer = setTimeout(preloadPriorityImages, 100);

    return () => clearTimeout(timer);
  }, [rooms]);

  // This component doesn't render anything, it just handles preloading
  return null;
}
