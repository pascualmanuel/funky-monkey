import React, { useState, useEffect } from "react";

const Loader = ({ onComplete, videoProgress = 0 }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Usar el progreso real del video si está disponible
    if (videoProgress > 0) {
      setProgress(videoProgress);

      // Cuando el video esté completamente cargado (100%), ocultar el loader
      if (videoProgress >= 100) {
        setTimeout(() => {
          setIsVisible(false);
          if (onComplete) {
            onComplete();
          }
        }, 500);
      }
    } else {
      // Fallback: si no hay progreso del video, usar el timer anterior
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            setTimeout(() => {
              setIsVisible(false);
              if (onComplete) {
                onComplete();
              }
            }, 500);
            return 100;
          }
          return prevProgress + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(timer);
    }
  }, [onComplete, videoProgress]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <div className="relative">
        {/* Logo o texto de carga */}
        <div className="text-white text-2xl font-bold mb-8">Funkey Monkey</div>

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
