"use client";

import { useEffect, useState, useCallback } from "react";

export const useImagePreloader = (images, options = {}) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [loadingImages, setLoadingImages] = useState(new Set());
  const {
    preloadDistance = 100, // pixels from viewport to start preloading
    maxConcurrent = 3, // max images loading at once
    priority = [], // array of image indices to preload first
  } = options;

  const preloadImage = useCallback(
    (imageSrc, index) => {
      if (loadedImages.has(index) || loadingImages.has(index)) {
        return Promise.resolve();
      }

      setLoadingImages((prev) => new Set([...prev, index]));

      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages((prev) => new Set([...prev, index]));
          setLoadingImages((prev) => {
            const newSet = new Set(prev);
            newSet.delete(index);
            return newSet;
          });
          resolve();
        };
        img.onerror = () => {
          setLoadingImages((prev) => {
            const newSet = new Set(prev);
            newSet.delete(index);
            return newSet;
          });
          reject(new Error(`Failed to load image: ${imageSrc}`));
        };
        img.src = imageSrc;
      });
    },
    [loadedImages, loadingImages]
  );

  const preloadBatch = useCallback(
    async (indices) => {
      const promises = indices
        .filter(
          (index) => !loadedImages.has(index) && !loadingImages.has(index)
        )
        .slice(0, maxConcurrent)
        .map((index) => preloadImage(images[index], index));

      try {
        await Promise.all(promises);
      } catch (error) {
        // Some images failed to preload
      }
    },
    [images, loadedImages, loadingImages, preloadImage, maxConcurrent]
  );

  // Preload priority images immediately
  useEffect(() => {
    if (images && images.length > 0 && priority.length > 0) {
      preloadBatch(priority);
    }
  }, [images, priority, preloadBatch]);

  const isImageLoaded = useCallback(
    (index) => {
      return loadedImages.has(index);
    },
    [loadedImages]
  );

  const isImageLoading = useCallback(
    (index) => {
      return loadingImages.has(index);
    },
    [loadingImages]
  );

  const getLoadingProgress = useCallback(() => {
    if (!images || images.length === 0) return 100;
    return Math.round((loadedImages.size / images.length) * 100);
  }, [loadedImages.size, images?.length]);

  return {
    loadedImages,
    loadingImages,
    preloadImage,
    preloadBatch,
    isImageLoaded,
    isImageLoading,
    getLoadingProgress,
  };
};
