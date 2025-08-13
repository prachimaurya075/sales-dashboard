import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [], 
  },
};

export default nextConfig;
