import Layout from "@/components/Layout";
import RoomsImage from "@/assets/rooms/rooms.webp";

export default function Rooms() {
  return (
    <Layout title="Our Rooms">
      <div
        className="min-h-[530px] md:min-h-[600px] md:h-[100dvh] max-h-[850px]  flex flex-col justify-center items-center"
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
    </Layout>
  );
}
