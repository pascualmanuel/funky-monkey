import Image from "next/image";

// The site exports static files with Next image optimization disabled. A native
// picture source supplies real width variants without adding client JavaScript.
export default function ActivityImage({ src, alt, sizes, priority = false, ...props }) {
  const name = src.src.split("/").pop().split(".")[0];
  const widths = [...new Set([480, 800, 1280, 1600].filter((width) => width < src.width).concat(Math.min(src.width, 1600)))];
  const srcSet = widths.map((width) => `/assets/activities/landing/${name}-${width}w.webp ${width}w`).join(", ");
  const mobileSrcSet = [480, 800].map((width) => `/assets/activities/landing/${name}-hero-${width}w.webp ${width}w`).join(", ");
  return <>
    {priority && <>
      <link rel="preload" as="image" media="(max-width: 767px)" imageSrcSet={mobileSrcSet} imageSizes="100vw" fetchPriority="high" />
      <link rel="preload" as="image" media="(min-width: 768px)" imageSrcSet={srcSet} imageSizes={sizes} fetchPriority="high" />
    </>}
    <picture>
      {priority && <source media="(max-width: 767px)" type="image/webp" srcSet={mobileSrcSet} sizes="100vw" />}
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <Image src={src} alt={alt} sizes={sizes} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} {...props} />
    </picture>
  </>;
}
