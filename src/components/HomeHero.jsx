import React, { useEffect, useState, useRef } from "react";
import Button from "./Button.jsx";
import HomeGrid from "./HomeGrid.jsx";
import Image from "next/image";
import Link from "next/link";
// import HomeHeroImage from "@/assets/home/home-hero.webp";

const homeTextLink =
  "text-black underline decoration-[#5AB012] decoration-2 underline-offset-[5px] transition-colors hover:text-green";

const HomeHero = ({ onVideoLoad, onError, playVideo, onVideoProgress }) => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showPoster, setShowPoster] = useState(true);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    if (onVideoLoad) {
      onVideoLoad();
    }
  };

  const handleVideoError = (error) => {
    setVideoError(true);
    if (onError) {
      onError(error);
    }
  };

  const handleProgress = (event) => {
    if (onVideoProgress && videoRef.current) {
      const video = videoRef.current;
      const progress = (video.buffered.end(0) / video.duration) * 100;
      onVideoProgress(progress);
    }
  };

  const handleCanPlayThrough = () => {
    // El video está completamente cargado y listo para reproducir
    setIsVideoReady(true);

    // Hide poster after video is ready with a smooth transition
    setTimeout(() => {
      setShowPoster(false);
    }, 300);

    if (onVideoProgress) {
      onVideoProgress(100);
    }
  };

  // Verificar el estado del video cuando se monta el componente
  useEffect(() => {
    const checkVideoState = () => {
      if (videoRef.current) {
        const video = videoRef.current;
        // Si el video ya tiene datos suficientes para reproducir
        if (video.readyState >= 3) {
          // HAVE_FUTURE_DATA o HAVE_ENOUGH_DATA
          setIsVideoReady(true);
          setTimeout(() => {
            setShowPoster(false);
          }, 300);
          if (onVideoProgress) {
            onVideoProgress(100);
          }
        }
        // Si el video ya tiene algunos datos cargados
        else if (video.readyState >= 2) {
          // HAVE_CURRENT_DATA
          const progress =
            video.buffered.length > 0
              ? (video.buffered.end(0) / video.duration) * 100
              : 0;
          if (onVideoProgress) {
            onVideoProgress(progress);
          }
        }
      }
    };

    // Verificar inmediatamente y después de un pequeño delay
    checkVideoState();
    const timer = setTimeout(checkVideoState, 100);

    return () => clearTimeout(timer);
  }, [onVideoProgress]);

  // Reproducir el video si `playVideo` es `true`
  useEffect(() => {
    if (videoRef.current && playVideo) {
      videoRef.current.play();
    }
  }, [playVideo]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="relative w-full h-[100dvh] overflow-hidden">
        {/* Poster Image - shown while video loads */}
        {showPoster && (
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <Image
              src={"/assets/home/home-hero.webp"}
              alt="Funky Monkey Lodge - Santa Teresa"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03000D] to-transparent"></div>
          </div>
        )}

        {/* Video de fondo */}
        <video
          ref={videoRef}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay={isMobile}
          loop={true}
          muted={true}
          playsInline={true}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          onProgress={handleProgress}
          onCanPlayThrough={handleCanPlayThrough}
          preload="metadata"
        >
          <source src="/assets/home/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#03000D] to-transparent"></div>
        <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-22 lg:px-28 pb-[50px] text-white max-w-screen-2xl mx-auto">
          <h1 className="myH1  mb-6 lg:mb-8 md:w-[550px] 2xl:w-auto  ">
            <span className="sr-only">
              Boutique surf &amp; yoga lodge in Costa Rica:{" "}
            </span>
            Santa Teresa’s hidden oasis
          </h1>
          <p className="body1">
            Enjoy your Costa Rica vacation at Funky Monkey Lodge
          </p>
          <div className="flex flex-row mt-8 gap-4 max-w-[380px]">
            <Button
              classNames="w-[100%] md:w-[325px]"
              height="54px"
              link="https://beds24.com/booking2.php?propid=63844"
              target="_blank"
              rel="noopener"
            >
              Book now
            </Button>
            <Button
              classNames="w-[100%] md:w-[325px]"
              height="54px"
              link="/rooms"
              variant="ghost"
            >
              View rooms
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-4 sm:mx-8 lg:mx-[70px] md:my-[130px] my-[50px] grid gap-8 lg:grid-cols-12 lg:gap-16">
        <h2 className="myH2 lg:col-span-5 text-balance">
          Your boutique surf &amp; yoga hotel{" "}
          <span className="text-[#5AB012]">
            in Santa Teresa, Costa Rica
          </span>
        </h2>
        <div className="lg:col-span-7 max-w-[720px] flex flex-col gap-6">
          <p className="text-[20px] leading-[30px] md:text-[24px] md:leading-[36px] text-black">
            Since 2001, Funky Monkey Lodge has welcomed surfers, yogis,
            families, couples and digital nomads to Santa Teresa, on Costa
            Rica&apos;s Nicoya Peninsula. Our family-owned lodge has 12 rooms
            set between the tropical forest and the beach, just a 5-minute walk
            from Playa Santa Teresa and some of the best surf in the country.
          </p>
          <p className="body1 text-darkGrey">
            Choose from{" "}
            <Link href="/rooms" className={homeTextLink}>
              ocean view rooms, treetop apartments, private bungalows and
              budget-friendly rooms
            </Link>
            . Every stay includes a light breakfast, daily housekeeping and
            fast Wi-Fi. Spend your days surfing, practicing yoga in our jungle
            studio or{" "}
            <Link href="/activities" className={homeTextLink}>
              exploring Tortuga Island
            </Link>
            , cool off in the pool, and end the day watching the sunset over
            the Pacific.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mt-2">
            <p className="border-t border-black/15 pt-5 text-[16px] leading-[24px] text-darkGrey">
              <strong className="block mb-1 text-[18px] font-semibold text-black">
                Traveling with a group?
              </strong>
              Book several rooms or the whole lodge for family reunions,
              friends&apos; trips and{" "}
              <Link href="/retreats" className={homeTextLink}>
                surf and yoga retreats
              </Link>
              .
            </p>
            <p className="border-t border-black/15 pt-5 text-[16px] leading-[24px] text-darkGrey">
              <strong className="block mb-1 text-[18px] font-semibold text-black">
                New to the area?
              </strong>
              Our{" "}
              <Link href="/santa-teresa" className={homeTextLink}>
                Santa Teresa guide
              </Link>{" "}
              has everything you need to plan your trip.
            </p>
          </div>
        </div>
      </section>
      <HomeGrid />
    </>
  );
};

export default HomeHero;
