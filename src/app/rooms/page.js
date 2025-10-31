"use client";
import Layout from "@/components/Layout";
import RoomsImage from "@/assets/home/rooms.webp";
import RoomCard from "@/components/RoomCard";
import AcIcon from "@/assets/rooms/icons/ac-icon.svg";
import BalconyIcon from "@/assets/rooms/icons/balcony-icon.svg";
import BedIcon from "@/assets/rooms/icons/bed-icon.svg";
import FridgeIcon from "@/assets/rooms/icons/fridge-icon.svg";
import GardenIcon from "@/assets/rooms/icons/garden-icon.svg";
import JacuzziIcon from "@/assets/rooms/icons/jacuzzi-icon.svg";
import KitchenIcon from "@/assets/rooms/icons/kitchen-icon.svg";
import M2Icon from "@/assets/rooms/icons/m2-icon.svg";
import OceanIcon from "@/assets/rooms/icons/ocean-icon.svg";
import PersonIcon from "@/assets/rooms/icons/person-icon.svg";
import SofaIcon from "@/assets/rooms/icons/sofa-icon.svg";
import { useState, useEffect } from "react";
import Faqs from "@/components/Faqs";
import PreFooter from "@/components/PreFooter";
import RoomsPreloader from "@/components/RoomsPreloader";
import SmartHeroPreloader from "@/components/SmartHeroPreloader";

// Helper function to generate image paths
const generateImagePaths = (folderName, count, prefix) => {
  return Array.from(
    { length: count },
    (_, i) => `/assets/rooms/${folderName}/${prefix}-${i + 1}.webp`
  );
};

export default function Rooms() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://funkymonkeylodge.com/wp-json/beds24/v2/properties-rooms?fwedaxs"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProperties(data.data[0].roomTypes);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const rooms = [
    {
      title: "Treetop upper apartment",
      description:
        "Exclusive romantic hideaway with stunning ocean views, 200 steps above the jungle.",
      image: "/assets/rooms/Treetop-Upper-Apartment/treetop-upper-1.webp",
      images: generateImagePaths(
        "Treetop-Upper-Apartment",
        13,
        "treetop-upper"
      ),
      features: [
        { icon: PersonIcon, text: "2 max" },
        { icon: M2Icon, text: "55m²" },
        { icon: AcIcon, text: "AC & Ceiling fan" },
        { icon: OceanIcon, text: "Ocean view" },
        { icon: JacuzziIcon, text: "Jacuzzi" },
        { icon: BalconyIcon, text: "Floating Balcony" },
        { icon: KitchenIcon, text: "Equipped kitchen" },
        { icon: BedIcon, text: "1 XL king bed" },
        { icon: SofaIcon, text: "1 Sofa bed" },
      ],
      buttonLink: "149072",
    },
    {
      title: "Treetop lower apartment",
      description:
        "Breathtaking ocean views, 200 steps up, perfect for couples, friends or solo travelers.",
      image: "/assets/rooms/Treetop-Lower-Apartment/treetop-lower-1.webp",
      images: generateImagePaths(
        "Treetop-Lower-Apartment",
        11,
        "treetop-lower"
      ),
      features: [
        { icon: PersonIcon, text: "3 max" },
        { icon: M2Icon, text: "60m²" },
        { icon: AcIcon, text: "AC & Ceiling fan" },
        { icon: OceanIcon, text: "Ocean view" },
        { icon: BalconyIcon, text: "Floating Balcony" },
        { icon: KitchenIcon, text: "Equipped kitchen" },
        { icon: SofaIcon, text: "1 Sofa bed" },
        { icon: BedIcon, text: "King bed convertible in 2 single" },
      ],
      buttonLink: "149071",
    },
    {
      title: "Luxury apartment",
      description:
        "Comfortable jungle escape for couples and singles looking for privacy close to nature.",
      image: "/assets/rooms/Luxury-Garden-View-Apartment/luxury-garden-1.webp",
      images: generateImagePaths(
        "Luxury-Garden-View-Apartment",
        10,
        "luxury-garden"
      ),
      features: [
        { icon: PersonIcon, text: "3 max" },
        { icon: M2Icon, text: "45m²" },
        { icon: AcIcon, text: "AC & Ceiling fan" },
        { icon: KitchenIcon, text: "Equipped kitchen" },
        { icon: GardenIcon, text: "Garden view" },
        { icon: BedIcon, text: "1 XL king bed" },
        { icon: SofaIcon, text: "1 Sofa bed" },
        { icon: BalconyIcon, text: "Floating Balcony" },
      ],
      buttonLink: "149070",
    },
    {
      title: "Ocean view room",
      description:
        "Cozy room 100 steps to lush greenery, peaceful vibes for singles, couples or small family.",
      image: "/assets/rooms/Ocean-View-Room/ocean-view-1.webp",
      images: generateImagePaths("Ocean-View-Room", 9, "ocean-view"),
      features: [
        { icon: PersonIcon, text: "4 max" },
        { icon: M2Icon, text: "45m²" },
        { icon: AcIcon, text: "AC & Ceiling fan" },
        { icon: OceanIcon, text: "Ocean view" },
        { icon: BalconyIcon, text: "Balcony" },
        { icon: BedIcon, text: "Queen bed" },
        { icon: SofaIcon, text: "1 Sofa bed" },
        { icon: SofaIcon, text: "Bunk bed" },
        { icon: FridgeIcon, text: "Mini fridge" },
      ],
      buttonLink: "149074",
    },
    {
      title: "Large ocean view room",
      description:
        "Spacious and bright with peaceful views, 100 steps climb, best choice for families and friends.",
      image: "/assets/rooms/Large-Ocean-View-Room/large-ocean-view-1.webp",
      images: generateImagePaths(
        "Large-Ocean-View-Room",
        10,
        "large-ocean-view"
      ),
      features: [
        { icon: PersonIcon, text: "7 max" },
        { icon: M2Icon, text: "65m²" },
        { icon: AcIcon, text: "AC & Fan" },
        { icon: OceanIcon, text: "Ocean view" },
        { icon: BalconyIcon, text: "Floating Balcony" },
        { icon: BedIcon, text: "Queen bed" },
        { icon: KitchenIcon, text: "Shared kitchen" },
        { icon: BedIcon, text: "3+2 single beds" },
      ],
      buttonLink: "149076",
    },
    {
      title: "Private bungalows (3)",
      description:
        "Great for singles couples or small family seeking simplicity, comfort and connection with nature.",
      image: "/assets/rooms/Private-Bungalow/private-bungalow-1.webp",
      images: generateImagePaths("Private-Bungalow", 11, "private-bungalow"),
      features: [
        { icon: PersonIcon, text: "4 max" },
        { icon: M2Icon, text: "40m²" },
        { icon: AcIcon, text: "AC & Ceiling fan" },
        { icon: GardenIcon, text: "Garden view" },
        { icon: BedIcon, text: "1 Full bed" },
        { icon: BalconyIcon, text: "Balcony" },
        { icon: FridgeIcon, text: "Mini fridge" },
        { icon: BedIcon, text: "2 single beds" },
      ],
      buttonLink: "149020",
    },
    {
      title: "Large bungalow",
      description:
        "Comfortable loft-style studio for families or small groups of friends surrounded by nature.",
      image: "/assets/rooms/Large-Bungalow/large-bungalow-1.webp",
      images: generateImagePaths("Large-Bungalow", 11, "large-bungalow"),
      features: [
        { icon: PersonIcon, text: "7 max" },
        { icon: M2Icon, text: "65m²" },
        { icon: AcIcon, text: "AC & Fan" },
        { icon: KitchenIcon, text: "Equipped kitchen" },
        { icon: GardenIcon, text: "Garden view" },
        { icon: BedIcon, text: "1 king bed" },
        { icon: BedIcon, text: "3+2 single beds" },
        { icon: BalconyIcon, text: "Balcony" },
      ],
      buttonLink: "149077",
    },
    {
      title: "Private suite",
      description:
        "Charming, natural style room designed for laid-back stays with warmth and space.",
      image: "/assets/rooms/Private Suite/private-suite-1.webp",
      images: generateImagePaths("Private Suite", 9, "private-suite"),
      features: [
        { icon: PersonIcon, text: "4 max" },
        { icon: M2Icon, text: "55m²" },
        { icon: AcIcon, text: "Ceiling fan" },
        { icon: GardenIcon, text: "Garden View" },
        { icon: BedIcon, text: "1 king bed" },
        { icon: SofaIcon, text: "Sofa convertible in king bed" },
        { icon: BalconyIcon, text: "Balcony" },
        { icon: FridgeIcon, text: "Mini fridge" },
      ],
      buttonLink: "149073",
    },
    {
      title: "Budget rooms (2)",
      description:
        "Simple, comfy, and affordable for light easygoing travelers who value comfort and good vibes.",
      image: "/assets/rooms/Private-Budget-Room/private-budget-1.webp",
      images: generateImagePaths("Private-Budget-Room", 8, "private-budget"),
      features: [
        { icon: PersonIcon, text: "2 max" },
        { icon: M2Icon, text: "12m²" },
        { icon: AcIcon, text: "Ceiling fan" },
        { icon: BedIcon, text: "1 king or 2 single beds" },
      ],
      buttonLink: "149078",
    },
  ];
  return (
    <Layout title="Our Rooms">
      {/* Global preloader for rooms */}
      <RoomsPreloader rooms={rooms} />

      {/* Smart hero preloader for navigation pages */}
      <SmartHeroPreloader />

      <div
        className="min-h-[680px] md:min-h-[600px] md:h-[100dvh] relative max-h-[850px]  flex flex-col justify-center items-center"
        style={{
          background: `linear-gradient(359.9deg, #000000 2.16%, rgba(0, 0, 0, 0) 61.44%), url("${RoomsImage.src}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="myH1 text-center text-white "> Rooms</h2>
        </div>
        <p className="body1 text-center text-white mx-5 md:mx-0 max-w-[450px] absolute bottom-16">
          Choose from our carefully designed rooms and suites, each offering
          comfort, style, and breathtaking views.
        </p>
      </div>
      <div className=" mx-auto md:mt-[130px] md:mb-[130px] mt-[50px] mb-[50px] text-center flex items-center flex-col gap-10 px-4">
        <h3 className="myH2 max-w-[600px]">
          Everything you need for&nbsp;
          <span className="text-[#5AB012]">a perfect stay </span>
        </h3>
        <p className="body1 max-w-[560px] text-darkGrey">
          All our rooms include safe box, fresh sheets, towels, soap, and daily
          cleaning. Guest have access to all hotel amenities including pool,
          yoga studio, and restaurant.
        </p>
      </div>
      {/* Rooms Grid */}
      <div className=" mx-auto md:px-[70px] px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rooms.map((room, index) => (
            <RoomCard
              key={index}
              room={room}
              imageIndex={1}
              totalImages={room.images ? room.images.length : 1}
            />
          ))}
        </div>
      </div>
      <Faqs category="hotel" showFilters={false} showViewMore={true} />
      <PreFooter />
    </Layout>
  );
}
