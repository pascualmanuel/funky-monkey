import Layout from "@/components/Layout";
import RetreatsImage from "@/assets/retreats/retreats.webp";

export default function Retreats() {

  return (
    <Layout title="Wellness Retreats">
      <div
        className="min-h-[530px] md:min-h-[600px] md:h-[100dvh] max-h-[850px]  flex flex-col justify-center items-center"
        style={{
          background: `linear-gradient(359.9deg, rgba(0, 0, 0, 0.6) 2.16%, rgba(0, 0, 0, 0) 61.44%),  url("${RetreatsImage.src}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="myH1 text-center text-white "> Retreats</h2>
        </div>
        <p className="body1 text-center text-white max-w-[450px] absolute bottom-16">
          Rejuvenate your mind, body, and soul with our carefully designed
          wellness retreats and programs.
        </p>
      </div>
    </Layout>
  );
}
