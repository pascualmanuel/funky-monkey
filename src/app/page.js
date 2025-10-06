"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import HomeHero from "@/components/HomeHero";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [playVideo, setPlayVideo] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [shouldShowLoader, setShouldShowLoader] = useState(false);

  // Verificar si el loader ya se mostró anteriormente
  useEffect(() => {
    const hasShownLoader = localStorage.getItem("funkey-monkey-loader-shown");

    if (hasShownLoader) {
      // Ya se mostró antes, no mostrar loader nunca más
      setShouldShowLoader(false);
      setIsLoading(false);
      setPlayVideo(true);
    } else {
      // Primera vez, mostrar loader
      setShouldShowLoader(true);
    }
  }, []);

  // Timeout de seguridad: si no recibimos actualizaciones del video en 3 segundos, ocultar el loader
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      if (shouldShowLoader) {
        console.log("Timeout de seguridad: ocultando loader");
        setShouldShowLoader(false);
        setIsLoading(false);
        setPlayVideo(true);
      }
    }, 3000);

    return () => clearTimeout(safetyTimer);
  }, [shouldShowLoader]);

  const handleLoaderComplete = () => {
    // Marcar que el loader ya se mostró
    localStorage.setItem("funkey-monkey-loader-shown", "true");
    setIsLoading(false);
    setPlayVideo(true);
  };

  const handleVideoLoad = () => {
    console.log("Video loaded successfully");
  };

  const handleVideoError = (error) => {
    console.error("Video loading error:", error);
    // En caso de error, ocultar el loader después de un tiempo
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  // Función para resetear el estado del loader (útil para desarrollo)
  // Puedes llamar resetLoader() desde la consola del navegador si necesitas volver a mostrar el loader
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.resetLoader = () => {
        localStorage.removeItem("funkey-monkey-loader-shown");
        console.log(
          "Loader state reset. Refresh the page to see the loader again."
        );
      };
    }
  }, []);

  const handleVideoProgress = (progress) => {
    setVideoProgress(progress);

    // Solo procesar si estamos mostrando el loader (primera vez)
    if (shouldShowLoader) {
      // Si el video ya está listo (100%)
      if (progress >= 100) {
        // El video ya está cargado, marcar como completado
        localStorage.setItem("funkey-monkey-loader-shown", "true");
        setShouldShowLoader(false);
        setIsLoading(false);
        setPlayVideo(true);
      }
      // Si el video está cargando, mantener el loader
      else if (progress > 0 && progress < 100) {
        // El video necesita cargar, mantener el loader
        setShouldShowLoader(true);
      }
    }
  };

  return (
    <>
      <Layout fullWidth>
        {isLoading && shouldShowLoader && (
          <Loader
            onComplete={handleLoaderComplete}
            videoProgress={videoProgress}
          />
        )}
        <HomeHero
          onVideoLoad={handleVideoLoad}
          onError={handleVideoError}
          playVideo={playVideo}
          onVideoProgress={handleVideoProgress}
        />
      </Layout>
    </>
  );
}
