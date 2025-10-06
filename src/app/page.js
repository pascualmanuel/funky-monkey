"use client";

import Layout from "@/components/Layout";
import HomeHero from "@/components/HomeHero";

export default function Home() {
  const handleVideoLoad = () => {
    console.log("Video loaded successfully");
  };

  const handleVideoError = (error) => {
    console.error("Video loading error:", error);
  };

  const handleVideoProgress = (progress) => {
    // El progreso del video se puede usar para otras funcionalidades si es necesario
    console.log("Video progress:", progress);
  };

  return (
    <Layout fullWidth>
      <HomeHero
        onVideoLoad={handleVideoLoad}
        onError={handleVideoError}
        playVideo={true}
        onVideoProgress={handleVideoProgress}
      />
    </Layout>
  );
}
