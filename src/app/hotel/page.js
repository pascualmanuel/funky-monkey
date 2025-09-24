import Layout from "@/components/Layout";
import TheHotelImage from "@/assets/the-hotel/the-hotel.webp";

export default function Hotel() {
  return (
    <Layout title="Our Hotel">
      <div
        className="min-h-[530px] md:min-h-[600px] md:h-[100dvh] max-h-[850px]  flex flex-col justify-center items-center"
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
          Experience luxury and comfort in our beautifully designed hotel,
          featuring world-class amenities and exceptional service.
        </p>
      </div>
    </Layout>
  );
}
