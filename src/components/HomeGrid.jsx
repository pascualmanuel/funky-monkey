import React from "react";
import Link from "next/link";
import Rooms from "../assets/home/rooms.webp";
import Activities from "../assets/home/activities.webp";
import Location from "../assets/home/location.webp";
import Offer from "../assets/home/offer-2.webp";
import Retreats from "../assets/home/retreats.webp";
import TheHotel from "../assets/home/the-hotel.webp";
import OfferIcon from "../assets/home/offer-icon.svg";
import Button from "./Button";
const HomeGrid = () => {
  return (
    <>
      <div className="mx-4 sm:mx-8 lg:mx-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/rooms"
            className=" h-[200px] sm:h-[677px] relative overflow-hidden rounded-[16px] cursor-pointer"
          >
            <img
              src={Rooms.src}
              className="w-full h-full object-cover"
              alt="Home Grid"
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
          </Link>
          <Link
            href="/activities"
            className=" h-[200px] sm:h-[677px] relative overflow-hidden rounded-[16px] cursor-pointer"
          >
            <img
              src={Activities.src}
              className="w-full h-full object-cover"
              alt="Home Grid"
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
          </Link>
          <Link
            href="/santa-teresa"
            className=" h-[200px] sm:h-[677px] relative overflow-hidden rounded-[16px] cursor-pointer"
          >
            <img
              src={Location.src}
              className="w-full h-full object-cover"
              alt="Home Grid"
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
          </Link>
          <Link
            href="/hotel"
            className="relative overflow-hidden rounded-[16px]  h-[200px] sm:h-[677px] lg:hidden cursor-pointer"
          >
            <img
              src={TheHotel.src}
              className="w-full h-full object-cover"
              alt="The Hotel"
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
          </Link>
        </div>
      </div>
      <div className="mx-4 sm:mx-8 lg:mx-[70px] mt-6 hidden lg:block">
        <Link
          href="/hotel"
          className="relative overflow-hidden rounded-[16px] h-[200px] sm:h-[365px] cursor-pointer block"
        >
          <img
            src={TheHotel.src}
            className="w-full h-full object-cover"
            alt="The Hotel"
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
        </Link>
      </div>
      <div className="mx-4 sm:mx-8 lg:mx-[70px] mt-6">
        <div className="flex gap-6 flex-col lg:flex-row">
          <Link
            href="/retreats"
            className="relative overflow-hidden rounded-[16px] h-[200px] sm:h-[365px] w-full lg:w-[65%] cursor-pointer"
          >
            <img
              src={Retreats.src}
              className="w-full h-full object-cover"
              alt="Retreats"
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
          </Link>
          <Link
            href="/offers"
            className="relative overflow-hidden rounded-[16px] h-[200px] sm:h-[365px] w-full lg:w-[35%] cursor-pointer"
          >
            <img
              src={Offer.src}
              className="w-full h-full object-cover "
              alt="Offers"
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
