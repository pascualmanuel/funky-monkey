import React, { useEffect, useState, useRef } from "react";
import Button from "./Button.jsx";
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
      <section className="relative w-full h-[100vh] overflow-hidden">
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
        <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-22 lg:px-28 pb-[130px] text-white max-w-screen-2xl mx-auto">
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
              link="/contact"
            >
              Book now
            </Button>
            <Button
              classNames="w-[100%] md:w-[325px]"
              height="54px"
              link="/contact"
            >
              Book your stay
            </Button>
          </div>
        </div>
      </section>

      <div className="lg:h-[1200px] bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col lg:items-center lg:flex-row lg:justify-between max-w-screen-2xl m-auto">
        <div className="max-w-[540px] lg:w-[460px] ml-6 mr-6 md:ml-16 xl:ml-28 relative lg:mr-[70px] 2xl:m">
          <h1 className="text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 absolute right-[32px] top-0">
            50+
          </h1>

          <div className="lg:mb-[50px] z-50 relative">
            <h2 className="text-6xl lg:text-7xl font-black tracking-tight lg:leading-[110px] lg:tracking-[-3%] text-white uppercase mb-5 lg:mb-0">
              Aventuras
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-green-400">
              Inolvidables
            </h3>
          </div>
          <div className="my-10 lg:my-0">
            <p className="text-gray-300 text-lg lg:text-xl mb-8">
              Sumérgete en la naturaleza exuberante de Costa Rica con nuestras
              experiencias únicas. Desde canopy tours hasta buceo en aguas
              cristalinas, cada aventura está diseñada para crear recuerdos
              inolvidables.
            </p>
            <Button
              variant="primary"
              width="w-[155px]"
              height="h-[48px]"
              link="/activities"
            >
              Ver Aventuras
            </Button>
          </div>
        </div>
        <div className="lg:h-[1440px] flex sm:justify-end lg:items-end sm:mt-[-110px] lg:mt-0">
          <div className="lg:mb-[270px] xl:mb-[140px] m-6 sm:m-0">
            <div className="">
              <Image
                src="/assets/home/hero-image.jpg"
                alt="Aventura en Costa Rica"
                width={740}
                height={600}
                className="sm:w-[440px] md:w-[540px] xl:w-[740px] rounded-md sm:rounded-r-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
