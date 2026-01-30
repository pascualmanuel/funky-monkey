import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Optimize CSS loading to reduce render blocking
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
  // Configure SWC to target modern browsers and reduce polyfills
  swcMinify: true,
};

export default nextConfig;
