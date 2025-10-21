import React, { useState, useEffect, useRef } from "react";

const Loader = ({ onComplete, videoProgress = 0 }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const startTime = useRef(Date.now());
  const completionTimeout = useRef(null);

  useEffect(() => {

    document.body.style.overflow = "hidden";


    const completeLoader = () => {
      const elapsedTime = Date.now() - startTime.current;
      const remainingTime = Math.max(0, 3000 - elapsedTime); // 3 segundos mínimo

      completionTimeout.current = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) {
          onComplete();
        }
      }, remainingTime + 500);
    };

    // Si tenemos progreso del video
    if (videoProgress > 0) {
      setProgress(videoProgress);

      // Cuando el video esté completamente cargado (100%)
      if (videoProgress >= 100) {
        completeLoader();
      }
    } else {
      // Fallback: simular progreso si no hay video
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            completeLoader();
            return 100;
          }
          return prevProgress + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(timer);
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "unset";
      if (completionTimeout.current) {
        clearTimeout(completionTimeout.current);
      }
    };
  }, [onComplete, videoProgress]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <div className="relative">
        {/* Logo o texto de carga */}
        <div className="text-white text-2xl font-bold mb-8">Funky Monkey</div>

        {/* Barra de progreso */}
        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Porcentaje */}
        <div className="text-white text-sm mt-2 text-center">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default Loader;
