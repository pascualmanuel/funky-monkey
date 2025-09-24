import Layout from "@/components/Layout";
import OffersImage from "@/assets/offers/offers.webp";

export default function Offers() {
  return (
    <Layout title="Special Offers">
      <div
        className="min-h-[530px] md:min-h-[600px] md:h-[100dvh] max-h-[850px]  flex flex-col justify-center items-center"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 127.49%), url("${OffersImage.src}")`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="myH1 text-center text-white max-w-[600px] ">
            From 50% OFF month
          </h2>
        </div>
        <p className="body1 text-center text-white max-w-[450px] absolute bottom-16">
          Take advantage of our special deals and packages designed to make your
          stay even more memorable and affordable.
        </p>
      </div>
    </Layout>
  );
}
