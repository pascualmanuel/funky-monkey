import Layout from "@/components/Layout";
import RoomsImage from "@/assets/home/rooms.webp";
import Room1 from "@/assets/rooms/room-1.webp";
import Room2 from "@/assets/rooms/room-2.webp";
import Room3 from "@/assets/rooms/room-3.webp";
import Room4 from "@/assets/rooms/room-4.webp";
import Room5 from "@/assets/rooms/room-5.webp";
import Room6 from "@/assets/rooms/room-6.webp";
import Room7 from "@/assets/rooms/room-7.webp";
import Room8 from "@/assets/rooms/room-8.webp";
import Room9 from "@/assets/rooms/room-9.webp";
import RoomCard from "@/components/RoomCard";
import AcIcon from "@/assets/rooms/icons/ac-icon.svg";
import BalconyIcon from "@/assets/rooms/icons/balcony-icon.svg";
import BedIcon from "@/assets/rooms/icons/bed-icon.svg";
import FridgeIcon from "@/assets/rooms/icons/fridge-icon.svg";
import GardenIcon from "@/assets/rooms/icons/garden-icon.svg";
import JacuzziIcon from "@/assets/rooms/icons/jacuzzi-icon.svg";
import M2Icon from "@/assets/rooms/icons/m2-icon.svg";
import OceanIcon from "@/assets/rooms/icons/ocean-icon.svg";
import PersonIcon from "@/assets/rooms/icons/person-icon.svg";
import SofaIcon from "@/assets/rooms/icons/sofa-icon.svg";

export default function Rooms() {
  const rooms = [
    {
      title: "Treetop upper apartment",
      description:
        "Exclusive romantic hideaway with stunning ocean views, 200 steps above the jungle.",
      image: Room1,
      images: [Room1, Room2, Room3],
      features: [
        { icon: AcIcon, text: "2 max" },
        { icon: M2Icon, text: "55m2" },
        { icon: OceanIcon, text: "Ocean view" },
        { icon: JacuzziIcon, text: "Jacuzzi" },
        { icon: BalconyIcon, text: "Floating balcony" },
        { icon: BedIcon, text: "1 XL king bed" },
      ],
      additionalFeatures: 3,
    },
    {
      title: "Treetop lower apartment",
      description:
        "Breathtaking ocean views, 200 steps up, perfect for couples, friends or solo travelers.",
      image: Room2,
      images: [Room2, Room3, Room4, Room5, Room6],
      features: [
        { icon: PersonIcon, text: "3 max" },
        { icon: M2Icon, text: "60m²" },
        { icon: AcIcon, text: "AC & Ceiling fan" },
        { icon: OceanIcon, text: "Ocean view" },
        { icon: BedIcon, text: "King bed convertible in single" },
      ],
      additionalFeatures: 3,
    },
    {
      title: "Luxury apartment",
      description:
        "Comfortable jungle escape for couples and singles looking for privacy close to nature.",
      image: Room3,
      images: [Room3, Room4, Room5],
      features: [
        { icon: PersonIcon, text: "3 max" },
        { icon: M2Icon, text: "45m²" },
        { icon: AcIcon, text: "AC & Ceiling fan" },
        { icon: BedIcon, text: "1 XL king bed" },
        { icon: SofaIcon, text: "1 Sofa bed" },
        { icon: BalconyIcon, text: "Balcony" },
      ],
      additionalFeatures: 2,
    },
    {
      title: "Ocean view room",
      description:
        "Cozy room 100 steps to lush greenery, peaceful vibes for singles, couples or small family.",
      image: Room4,
      images: [Room4, Room5, Room6],
      features: [
        { icon: PersonIcon, text: "4 max" },
        { icon: M2Icon, text: "45m²" },
        { icon: AcIcon, text: "AC & Ceiling fan" },
        { icon: OceanIcon, text: "Ocean view" },
        { icon: BalconyIcon, text: "Balcony" },
        { icon: BedIcon, text: "Queen bed" },
      ],
      additionalFeatures: 3,
    },
    {
      title: "Large ocean view room",
      description:
        "Spacious and bright with peaceful views, 100 steps climb, best choice for families and friends.",
      image: Room5,
      images: [Room5, Room6, Room7],
      features: [
        { icon: PersonIcon, text: "7 max" },
        { icon: M2Icon, text: "65m²" },
        { icon: AcIcon, text: "AC & Fan" },
        { icon: OceanIcon, text: "Ocean view" },
        { icon: BedIcon, text: "Queen bed" },
        { icon: BedIcon, text: "3+2 single beds" },
      ],
      additionalFeatures: 2,
    },
    {
      title: "Private bungalows (3)",
      description:
        "Great for singles couples or small family seeking simplicity, comfort and connection with nature.",
      image: Room6,
      images: [Room6, Room7, Room8],
      features: [
        { icon: PersonIcon, text: "4 max" },
        { icon: M2Icon, text: "40m²" },
        { icon: AcIcon, text: "AC & Ceiling fan" },
        { icon: BedIcon, text: "1 Full bed" },
        { icon: BalconyIcon, text: "Balcony" },
        { icon: FridgeIcon, text: "Mini fridge" },
        { icon: BedIcon, text: "2 single beds" },
      ],
      additionalFeatures: 1,
    },
    {
      title: "Large Ocean view bungalow",
      description:
        "Comfortable loft-style studio for families or small groups of friends surrounded by nature.",
      image: Room7,
      images: [Room7, Room8, Room9],
      features: [
        { icon: PersonIcon, text: "7 max" },
        { icon: M2Icon, text: "65m²" },
        { icon: AcIcon, text: "AC & Fan" },
        { icon: BedIcon, text: "1 king bed" },
        { icon: BedIcon, text: "3+2 single beds" },
        { icon: BalconyIcon, text: "Balcony" },
      ],
      additionalFeatures: 2,
    },
    {
      title: "Private suite",
      description:
        "Charming, natural style room designed for laid-back stays with warmth and space.",
      image: Room8,
      images: [Room8, Room9, Room1],
      features: [
        { icon: PersonIcon, text: "4 max" },
        { icon: M2Icon, text: "55m²" },
        { icon: AcIcon, text: "Ceiling fan" },
        { icon: GardenIcon, text: "Garden View" },
        { icon: BedIcon, text: "1 king bed" },
        { icon: SofaIcon, text: "Sofa convertible in king bed" },
      ],
      additionalFeatures: 2,
    },
    {
      title: "Budget rooms (2)",
      description:
        "Simple, comfy, and affordable for light easygoing travelers who value comfort and good vibes.",
      image: Room9,
      images: [Room9, Room1, Room2],
      features: [
        { icon: PersonIcon, text: "2 max" },
        { icon: M2Icon, text: "12m²" },
        { icon: AcIcon, text: "Ceiling fan" },
        { icon: BedIcon, text: "1 king or 2 single beds" },
      ],
    },
  ];
  return (
    <Layout title="Our Rooms">
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
        <p className="body1 text-center text-white max-w-[450px] absolute bottom-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </Layout>
  );
}
