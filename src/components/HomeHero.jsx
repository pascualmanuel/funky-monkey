import React, { useEffect, useState, useRef } from "react";
import Button from "./Button.jsx";
import HomeGrid from "./HomeGrid.jsx";
import Image from "next/image";
import Link from "next/link";

const HomeHero = ({ onVideoLoad, onError, playVideo, onVideoProgress }) => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

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
        {/* Video de fondo */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay={isMobile}
          loop={true}
          muted={true}
          playsInline={true}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          onProgress={handleProgress}
          onCanPlayThrough={handleCanPlayThrough}
          preload="auto"
        >
          <source src="/assets/home/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#03000D] to-transparent"></div>
        <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-22 lg:px-28 pb-[50px] text-white max-w-screen-2xl mx-auto">
          <h1 className="myH1  mb-6 lg:mb-8 md:w-[550px] 2xl:w-auto  ">
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

      <div className=" mx-auto md:mt-[130px] md:mb-[130px] mt-[50px] mb-[50px] text-center flex items-center flex-col gap-10 px-4">
        <h3 className="myH2 max-w-[776px]">
          Boutique hotel in Santa Teresa,{" "}
          <span className="text-[#5AB012]">steps from the beach </span>
        </h3>
        <p className="body1 max-w-[560px] text-darkGrey">
          Funky Monkey Lodge is designed for relaxation. With a vibrant
          atmosphere and attentive staff, we ensure your stay is nothing short
          of amazing. Whether for a romantic escape or a family vacation, our
          accommodations cater to every need.{" "}
        </p>
      </div>
      <HomeGrid />
    </>
  );
};

export default HomeHero;
