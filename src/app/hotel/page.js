import Layout from "@/components/Layout";
import TheHotelImage from "@/assets/the-hotel/the-hotel.webp";
import HotelIcon1 from "@/assets/the-hotel/hotel-icon-1.svg";
import HotelIcon2 from "@/assets/the-hotel/hotel-icon-2.svg";
import HotelIcon3 from "@/assets/the-hotel/hotel-icon-3.svg";
import HotelIcon4 from "@/assets/the-hotel/hotel-icon-4.svg";
import HotelIcon5 from "@/assets/the-hotel/hotel-icon-5.svg";
import HotelIcon6 from "@/assets/the-hotel/hotel-icon-6.svg";

export default function Hotel() {
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
          Laid-back, cozy and surrounded by nature. Hidden gem in a private
          paradise to relax and reset.
        </p>
      </div>

      <div className=" mx-auto md:mt-[130px] md:mb-[130px] mt-[50px] mb-[50px] text-center  px-4">
        <div className="max-w-[730px] flex items-center flex-col gap-8">
          <h3 className="myH2 ">Our Roots</h3>
          <p className="body1  text-darkGrey">
            A boutique family-owned hotel in Playa Santa Teresa, Costa Rica,
            steps away from the beach, Funky Monkey Lodge has been welcoming
            travelers since 2001.
          </p>
          <p className="body1  text-darkGrey">
            We started as one of the very first surf lodges in the area, with a
            few simple bungalows for surfers and adventurous backpackers. As
            Santa Teresa and tourism evolved, so did we!
          </p>
          <p className="body1  text-darkGrey">
            Today, our eco-friendly beach lodge offers a variety of
            accommodations, ideal for couples, families, digital nomads, and
            groups.
          </p>
          <p className="body1  text-darkGrey">
            Located between the tropical rainforest and the unspoiled beaches of
            the Nicoya Peninsula, Funky Monkey Lodge blends nature, comfort and
            community.
          </p>
          <p className="body1  text-darkGrey">
            Whether you come to surf, practice yoga, or simply relax, our
            friendly staff and personalized attention create the perfect setting
            for a memorable stay.
          </p>
        </div>
      </div>

      <div className=" mx-auto md:mt-[130px] md:mb-[130px] mt-[50px] mb-[50px] text-center flex items-center flex-col gap-10 px-4">
        <h3 className="myH2 max-w-[600px]">
          Amenities that make you&nbsp;
          <span className="text-[#5AB012]">feel at home </span>
        </h3>
        <div className="max-w-7xl mx-auto px-4 mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center text-center">
              <img
                src={HotelIcon1.src}
                alt="Beach Icon"
                className="mb-4 w-12 h-12"
              />
              <p className="body1 text-darkGrey">Large pool</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={HotelIcon2.src}
                alt="Bed Icon"
                className="mb-4 w-12 h-12"
              />
              <p className="body1 text-darkGrey">Jungle Yoga Studio</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={HotelIcon3.src}
                alt="Food Icon"
                className="mb-4 w-12 h-12"
              />
              <p className="body1 text-darkGrey">Daily breakfast</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={HotelIcon4.src}
                alt="Car Icon"
                className="mb-4 w-12 h-12"
              />
              <p className="body1 text-darkGrey">Co-working area</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={HotelIcon5.src}
                alt="Hotel Icon"
                className="mb-4 w-12 h-12"
              />
              <p className="body1 text-darkGrey">Communal kitchen</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={HotelIcon6.src}
                alt="Hotel Icon"
                className="mb-4 w-12 h-12"
              />
              <p className="body1 text-darkGrey">Private parking</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
