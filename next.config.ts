import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
  reactStrictMode: true, // فعال‌سازی حالت Strict React
  // experimental: {
  //   appDir: true, // حذف این گزینه
  // },
};

export default nextConfig;
