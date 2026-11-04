"use client";

import Layout from "@/components/Layout";
import HomeHero from "@/components/HomeHero";
import SmartHeroPreloader from "@/components/SmartHeroPreloader";
import { hotelSchema } from "@/lib/hotelSchema";

export default function Home() {
  const handleVideoLoad = () => {
    // Video loaded successfully
  };

  const handleVideoError = (error) => {
    // Handle video error if needed
  };

  const handleVideoProgress = (progress) => {
    // Video progress tracking
  };

  return (
    <Layout fullWidth>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelSchema).replace(/</g, "\\u003c"),
        }}
      />
      {/* Smart hero preloader for navigation pages */}
      <SmartHeroPreloader />

      <HomeHero
        onVideoLoad={handleVideoLoad}
        onError={handleVideoError}
        playVideo={true}
        onVideoProgress={handleVideoProgress}
      />
    </Layout>
  );
}
