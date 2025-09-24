import Layout from "@/components/Layout";
import RoomCard from "@/components/RoomCard";
import TheHotelImage from "@/assets/the-hotel/the-hotel.webp";
import Room1 from "@/assets/rooms/room-1.webp";
import Room2 from "@/assets/rooms/room-2.webp";
import Room3 from "@/assets/rooms/room-3.webp";
import Room4 from "@/assets/rooms/room-4.webp";
import Room5 from "@/assets/rooms/room-5.webp";
import Room6 from "@/assets/rooms/room-6.webp";
import Room7 from "@/assets/rooms/room-7.webp";
import Room8 from "@/assets/rooms/room-8.webp";
import Room9 from "@/assets/rooms/room-9.webp";

export default function Hotel() {
  const rooms = [
    {
      title: "Treetop upper apartment",
      description:
        "Exclusive romantic hideaway with stunning ocean views, 200 steps above the jungle.",
      image: Room1,
      features: [
        { icon: "👥", text: "2 max" },
        { icon: "📐", text: "55m²" },
        { icon: "🌊", text: "Ocean view" },
        { icon: "🛁", text: "Jacuzzi" },
        { icon: "🏠", text: "Floating balcony" },
        { icon: "🛏️", text: "1 XL king bed" },
      ],
      additionalFeatures: 3,
    },
    {
      title: "Treetop lower apartment",
      description:
        "Breathtaking ocean views, 200 steps up, perfect for couples, friends or solo travelers.",
      image: Room2,
      features: [
        { icon: "👥", text: "2 max" },
        { icon: "📐", text: "50m²" },
        { icon: "🌊", text: "Ocean view" },
        { icon: "🏠", text: "Private balcony" },
        { icon: "🛏️", text: "1 king bed" },
      ],
      additionalFeatures: 2,
    },
    {
      title: "Luxury apartment",
      description:
        "Comfortable jungle escape for couples and singles looking for privacy close to nature.",
      image: Room3,
      features: [
        { icon: "👥", text: "2 max" },
        { icon: "📐", text: "45m²" },
        { icon: "🌿", text: "Jungle view" },
        { icon: "🛏️", text: "1 queen bed" },
        { icon: "🏠", text: "Private terrace" },
      ],
      additionalFeatures: 1,
    },
    {
      title: "Ocean view room",
      description:
        "Cozy room 100 steps to lush greenery, peaceful vibes for singles, couples or small family.",
      image: Room4,
      features: [
        { icon: "👥", text: "3 max" },
        { icon: "📐", text: "35m²" },
        { icon: "🌊", text: "Ocean view" },
        { icon: "🛏️", text: "2 beds" },
        { icon: "🏠", text: "Balcony" },
      ],
      additionalFeatures: 0,
    },
    {
      title: "Large ocean view room",
      description:
        "Spacious and bright with peaceful views, 100 steps climb, best choice for families and friends.",
      image: Room5,
      features: [
        { icon: "👥", text: "4 max" },
        { icon: "📐", text: "40m²" },
        { icon: "🌊", text: "Ocean view" },
        { icon: "🛏️", text: "2 queen beds" },
        { icon: "🏠", text: "Large balcony" },
      ],
      additionalFeatures: 1,
    },
    {
      title: "Private bungalows (3)",
      description:
        "Great for singles couples or small family seeking simplicity, comfort and connection with nature.",
      image: Room6,
      features: [
        { icon: "👥", text: "2 max" },
        { icon: "📐", text: "30m²" },
        { icon: "🌿", text: "Garden view" },
        { icon: "🛏️", text: "1 bed" },
        { icon: "🏠", text: "Private entrance" },
      ],
      additionalFeatures: 0,
    },
    {
      title: "Large Ocean view bungalow",
      description:
        "Comfortable loft-style studio for families or small groups of friends surrounded by nature.",
      image: Room7,
      features: [
        { icon: "👥", text: "4 max" },
        { icon: "📐", text: "60m²" },
        { icon: "🌊", text: "Ocean view" },
        { icon: "🛏️", text: "Loft bed" },
        { icon: "🏠", text: "Private deck" },
      ],
      additionalFeatures: 2,
    },
    {
      title: "Private suite",
      description:
        "Charming, natural style room designed for laid-back stays with warmth and space.",
      image: Room8,
      features: [
        { icon: "👥", text: "2 max" },
        { icon: "📐", text: "50m²" },
        { icon: "🌿", text: "Nature view" },
        { icon: "🛏️", text: "1 king bed" },
        { icon: "🏠", text: "Private lounge" },
      ],
      additionalFeatures: 1,
    },
    {
      title: "Budget rooms (2)",
      description:
        "Simple, comfy, and affordable for light easygoing travelers who value comfort and good vibes.",
      image: Room9,
      features: [
        { icon: "👥", text: "2 max" },
        { icon: "📐", text: "25m²" },
        { icon: "🛏️", text: "1 bed" },
        { icon: "💰", text: "Budget friendly" },
      ],
      additionalFeatures: 0,
    },
  ];

  return (
    <Layout title="Our Hotel">
      <div
        className="min-h-[530px] md:min-h-[600px] md:h-[100dvh] relativemax-h-[850px]  flex flex-col justify-center items-center"
        style={{
          background: `linear-gradient(1.26deg, #000000 10.01%, rgba(0, 0, 0, 0) 80.21%), url("${TheHotelImage.src}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="myH1 text-center text-white ">The Hotel</h2>
        </div>
        <p className="body1 text-center text-white max-w-[450px] absolute bottom-16">
          Short or long term, alone or with family, our hotel offers variety of
          accommodations to immerse yourself in the beauty of the surrounding
          nature.
        </p>
      </div>

      <div className=" mx-auto md:mt-[130px] md:mb-[130px] mt-[50px] mb-[50px] text-center flex items-center flex-col gap-10 px-4">
        <h3 className="myH2 max-w-[600px]">Our Roots</h3>
        <p className="body1 max-w-[560px] text-darkGrey">
          A boutique family-owned hotel in Playa Santa Teresa, Costa Rica, steps
          away from the beach, Funky Monkey Lodge has been welcoming travelers
          since 2001.
        </p>
        <p className="body1 max-w-[560px] text-darkGrey">
          We started as one of the very first surf lodges in the area, with a
          few simple bungalows for surfers and adventurous backpackers. As Santa
          Teresa and tourism evolved, so did we!
        </p>
        <p className="body1 max-w-[560px] text-darkGrey">
          Today, our eco-friendly beach lodge offers a variety of
          accommodations, ideal for couples, families, digital nomads, and
          groups.
        </p>
        <p className="body1 max-w-[560px] text-darkGrey">
          Located between the tropical rainforest and the unspoiled beaches of
          the Nicoya Peninsula, Funky Monkey Lodge blends nature, comfort and
          community.
        </p>
        <p className="body1 max-w-[560px] text-darkGrey">
          Whether you come to surf, practice yoga, or simply relax, our friendly
          staff and personalized attention create the perfect setting for a
          memorable stay.
        </p>
      </div>
    </Layout>
  );
}
