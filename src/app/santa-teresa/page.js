import Layout from "@/components/Layout";
import SantaTeresa from "@/assets/santa-teresa/santa-teresa.webp";
export default function Activities() {
  return (
    <Layout title="Santa Teresa">
      <div
        className="min-h-[530px] md:min-h-[600px] md:h-[100dvh] max-h-[850px]  flex flex-col justify-center items-center"
        style={{
          background: `linear-gradient(359.9deg, #000000 2.16%, rgba(0, 0, 0, 0) 61.44%), url("${SantaTeresa.src}")`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="myH1 text-center text-white ">Santa Teresa</h2>
        </div>
        <p className="body1 text-center text-white max-w-[450px] absolute bottom-16">
          A laid-back beach town where the jungle meets the ocean and adventure
          begins.
        </p>
      </div>
    </Layout>
  );
}
