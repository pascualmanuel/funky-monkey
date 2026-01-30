import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Optimize CSS loading to reduce render blocking
  // Note: This requires 'critters' package to be installed
  experimental: {
    optimizeCss: true,
  },
  // Reduce Legacy JavaScript by using modern ES6+ features
  // This prevents unnecessary transpilation of modern JavaScript
  compiler: {
    // Remove console.log in production (optional optimization)
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },
  // Note: swcMinify is enabled by default in Next.js 15, no need to specify
};

export default nextConfig;
