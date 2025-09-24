import Layout from "@/components/Layout";
import ActivitiesImage from "@/assets/activities/activities.webp";

export default function Activities() {
  return (
    <Layout title="Activities">
      <div
        className="min-h-[530px] md:min-h-[600px] md:h-[100dvh] max-h-[850px]  flex flex-col justify-center items-center"
        style={{
          background: `linear-gradient(359.9deg, #000000 2.16%, rgba(0, 0, 0, 0) 61.44%), url("${ActivitiesImage.src}")`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="myH1 text-center text-white ">Activities</h2>
        </div>
        <p className="body1 text-center text-white max-w-[450px] absolute bottom-16">
          Discover a wide range of exciting activities and adventures designed
          to create unforgettable memories during your stay.
        </p>
      </div>
    </Layout>
  );
}
