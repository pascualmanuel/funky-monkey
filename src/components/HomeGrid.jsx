import React from "react";
import Link from "next/link";
import OfferIcon from "../assets/home/offer-icon.svg";
import Button from "./Button";
import HomeArrow from "../assets/arrow.svg";

const ASSETS = "/assets/home";
const GRID_SIZES =
  "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";
const ROW_SIZES = "(max-width: 768px) 100vw, 1200px";

function ResponsiveImg({ base, alt, sizes = GRID_SIZES, loading, className }) {
  const srcSet = `${ASSETS}/${base}-400w.webp 400w, ${ASSETS}/${base}-800w.webp 800w, ${ASSETS}/${base}-1200w.webp 1200w`;
  return (
    <img
      src={`${ASSETS}/${base}-800w.webp`}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      decoding="async"
      loading={loading}
      className={className}
    />
  );
}

const HomeGrid = () => {
  return (
    <>

      <div className="mx-4 sm:mx-8 lg:mx-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/rooms"
            className=" h-[200px] sm:h-[677px] relative overflow-hidden rounded-[16px] cursor-pointer group"
          >
            <ResponsiveImg
              base="rooms"
              alt="Rooms"
              loading="eager"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(359.28deg, rgba(0, 0, 0, 0.4) -17.14%, rgba(0, 0, 0, 0) 71.24%)",
              }}
            />
            <p className="text-2xl jakarta font-bold text-white absolute bottom-[30px] left-[30px] z-10">
              Rooms
            </p>
            <img
              src={HomeArrow.src}
              className="absolute bottom-[30px] right-[30px] z-10 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
              alt="Arrow"
            />
          </Link>
          <Link
            href="/activities"
            className=" h-[200px] sm:h-[677px] relative overflow-hidden rounded-[16px] cursor-pointer group"
          >
            <ResponsiveImg
              base="activities"
              alt="Activities"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(359.28deg, rgba(0, 0, 0, 0.4) -17.14%, rgba(0, 0, 0, 0) 71.24%)",
              }}
            />
            <p className="text-2xl jakarta font-bold text-white absolute bottom-[30px] left-[30px] z-10">
              Activities
            </p>
            <img
              src={HomeArrow.src}
              className="absolute bottom-[30px] right-[30px] z-10 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
              alt="Arrow"
            />
          </Link>
          <Link
            href="/santa-teresa"
            className=" h-[200px] sm:h-[677px] relative overflow-hidden rounded-[16px] cursor-pointer group"
          >
            <ResponsiveImg
              base="location"
              alt="Location"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(359.28deg, rgba(0, 0, 0, 0.4) -17.14%, rgba(0, 0, 0, 0) 71.24%)",
              }}
            />
            <p className="text-2xl jakarta font-bold text-white absolute bottom-[30px] left-[30px] z-10">
              Location
            </p>
            <img
              src={HomeArrow.src}
              className="absolute bottom-[30px] right-[30px] z-10 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
              alt="Arrow"
            />
          </Link>
          <Link
            href="/hotel"
            className="relative overflow-hidden rounded-[16px]  h-[200px] sm:h-[677px] lg:hidden cursor-pointer group"
          >
            <ResponsiveImg
              base="the-hotel"
              alt="The Hotel"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(359.28deg, rgba(0, 0, 0, 0.4) -17.14%, rgba(0, 0, 0, 0) 71.24%)",
              }}
            />
            <p className="text-2xl jakarta font-bold text-white absolute bottom-[30px] left-[30px] z-10">
              The Hotel
            </p>
            <img
              src={HomeArrow.src}
              className="absolute bottom-[30px] right-[30px] z-10 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
              alt="Arrow"
            />
          </Link>
        </div>
      </div>
      <div className="mx-4 sm:mx-8 lg:mx-[70px] mt-6 hidden lg:block">
        <Link
          href="/hotel"
          className="relative overflow-hidden rounded-[16px] h-[200px] sm:h-[365px] cursor-pointer block group"
        >
          <ResponsiveImg
            base="the-hotel"
            alt="The Hotel"
            sizes={ROW_SIZES}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(359.28deg, rgba(0, 0, 0, 0.4) -17.14%, rgba(0, 0, 0, 0) 71.24%)",
            }}
          />
          <p className="text-2xl jakarta font-bold text-white absolute bottom-[30px] left-[30px] z-10">
            The Hotel
          </p>
          <img
            src={HomeArrow.src}
            className="absolute bottom-[30px] right-[30px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            alt="Arrow"
          />
        </Link>
      </div>
      <div className="mx-4 sm:mx-8 lg:mx-[70px] mt-6">
        <div className="flex gap-6 flex-col lg:flex-row">
          <Link
            href="/retreats"
            className="relative overflow-hidden rounded-[16px] h-[200px] sm:h-[365px] w-full lg:w-[65%] cursor-pointer group"
          >
            <ResponsiveImg
              base="retreats"
              alt="Retreats"
              sizes="(max-width: 768px) 100vw, 65vw"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(359.28deg, rgba(0, 0, 0, 0.4) -17.14%, rgba(0, 0, 0, 0) 71.24%)",
              }}
            />
            <p className="text-2xl jakarta font-bold text-white absolute bottom-[30px] left-[30px] z-10">
              Retreats
            </p>
            <img
              src={HomeArrow.src}
              className="absolute bottom-[30px] right-[30px] z-10 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
              alt="Arrow"
            />
          </Link>
          <Link
            href="/offers"
            className="relative overflow-hidden rounded-[16px] h-[200px] sm:h-[365px] w-full lg:w-[35%] cursor-pointer group"
          >
            <ResponsiveImg
              base="offer-2"
              alt="Offers"
              sizes="(max-width: 768px) 100vw, 35vw"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(359.28deg, rgba(0, 0, 0, 0.4) -17.14%, rgba(0, 0, 0, 0) 71.24%)",
              }}
            />
            <p className="text-2xl jakarta font-bold text-white absolute bottom-[30px] left-[30px] z-10">
              Offers
            </p>
            <img
              src={OfferIcon.src}
              className="absolute sm:bottom-10 sm:right-10 bottom-2 right-2"
              alt="Offer Icon"
            />
            <img
              src={HomeArrow.src}
              className="absolute bottom-[30px] right-[30px] z-10 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
              alt="Arrow"
            />
          </Link>
        </div>
      </div>
      <div className="mx-4 sm:mx-8 lg:mx-[70px]">
        <div className=" overflow-hidden bgreen-gradient rounded-[16px]  my-[100px]">
          <div className="flex flex-col items-center justify-center gap-6 py-[55px]">
            <p className="myH3 h-full text-white text-center z-10  max-w-[200px] sm:max-w-[520px] mx-auto">
              Ready for a Costa Rican adventure?
            </p>
            <Button
              variant="greenBlue"
              link="https://beds24.com/booking2.php?propid=63844"
              target="_blank"
              rel="noopener"
              classNames="w-[155px] h-[50px] transform hover:-translate-y-1 transition duration-400"
            >
              Book your stay
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeGrid;
