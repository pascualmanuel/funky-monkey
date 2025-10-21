"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import GalleryModal from "./GalleryModal";
import Room1 from "@/assets/rooms/room-1.webp";
import Room2 from "@/assets/rooms/room-2.webp";
import Room3 from "@/assets/rooms/room-3.webp";
import Room4 from "@/assets/rooms/room-4.webp";
import Room5 from "@/assets/rooms/room-5.webp";

export default function RoomCard({ room, imageIndex = 1, totalImages = 1 }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Use room images if available, otherwise fallback to sample images
  const roomImages = room.images || [Room1, Room2, Room3, Room4, Room5];
  const actualTotalImages = roomImages.length;

  const handleImageClick = (e) => {

    // For mobile, this will be handled by touch events
    if (window.innerWidth >= 1024) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const centerStart = rect.width * 0.15; // 15% from left
      const centerEnd = rect.width * 0.85; // 85% from left

      if (clickX >= centerStart && clickX <= centerEnd) {
        setIsGalleryOpen(true);
      }
    }
  };

  const handlePreviousImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? actualTotalImages - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === actualTotalImages - 1 ? 0 : prev + 1
    );
  };

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    const isTap = Math.abs(distance) < 30;

    // Only handle touch events on screens < 1024px
    if (window.innerWidth < 1024) {
      if (isLeftSwipe && actualTotalImages > 1) {
        e.preventDefault();
        setCurrentImageIndex((prev) =>
          prev === actualTotalImages - 1 ? 0 : prev + 1
        );
      } else if (isRightSwipe && actualTotalImages > 1) {
        e.preventDefault();
        setCurrentImageIndex((prev) =>
          prev === 0 ? actualTotalImages - 1 : prev - 1
        );
      } else if (isTap) {
        // It's a tap, open modal
        e.preventDefault();
        setIsGalleryOpen(true);
      }
    }
  };
  return (
    <div className="bg-[#FDFFFC] border border-[#E5E7E4] rounded-[12px] overflow-hidden flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <button
          onClick={handleImageClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-full cursor-pointer group touch-manipulation"
          style={{ touchAction: "manipulation" }}
        >
          <Image
            src={roomImages[currentImageIndex]}
            alt={room.title}
            fill
            className="object-cover transition-transform duration-400 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </div>
        </button>

        {/* Navigation arrows - only show if more than 1 image */}
        {actualTotalImages > 1 && (
          <>
            {/* Previous arrow */}
            <button
              onClick={handlePreviousImage}
              className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 active:bg-opacity-90 text-white w-10 h-10 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-200 opacity-90 hover:opacity-100 touch-manipulation"
            >
              <svg
                className="w-5 h-5 md:w-4 md:h-4"
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

            {/* Next arrow */}
            <button
              onClick={handleNextImage}
              className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 active:bg-opacity-90 text-white w-10 h-10 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-200 opacity-90 hover:opacity-100 touch-manipulation"
            >
              <svg
                className="w-5 h-5 md:w-4 md:h-4"
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
          </>
        )}

        {/* Image counter badge */}
        {actualTotalImages > 1 && (
          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-black bg-opacity-60 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
            {currentImageIndex + 1}/{actualTotalImages}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="m-4 flex flex-1 flex-col">
        <div className="flex-1">
          {/* Title */}
          <h3 className="subH2 mb-3">{room.title}</h3>

          {/* Description */}
          <p className="body2 text-darkGrey mb-4">{room.description}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4 ">
            {room.features.map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-[8px] py-1 bg-[#FDFFFC] border border-gray-200 rounded-full body3 text-darkGrey"
              >
                <span className="w-3.5 h-3.5 flex items-center justify-center">
                  {typeof feature.icon === "string" ? (
                    feature.icon
                  ) : (
                    <Image
                      src={feature.icon}
                      alt=""
                      width={15}
                      height={15}
                      className="w-3.5 h-3.5"
                    />
                  )}
                </span>
                {feature.text}
              </span>
            ))}
            {room.additionalFeatures && room.additionalFeatures > 0 && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#FDFFFC] border border-gray-200 rounded-full body3 text-darkGrey">
                +{room.additionalFeatures} more
              </span>
            )}
          </div>
        </div>

        {/* Book Now Button */}
        <a
          href={`https://beds24.com/booking2.php?roomid=${room.buttonLink}`}
          // href={"https://beds24.com/booking2.php?propid="}
          target="_blank"
          className="w-full bg-green hover:bg-[#176221] text-white font-bold py-3 px-6 rounded-[8px] text-center transition-colors duration-200"
        >
          Book Now
        </a>
      </div>

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={roomImages}
        initialIndex={currentImageIndex}
        roomTitle={room.title}
        buttonLink={room.buttonLink}
      />
    </div>
  );
}
