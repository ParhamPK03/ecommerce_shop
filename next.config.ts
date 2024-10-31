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
  swcMinify: true, // فعال‌سازی کاهش‌دهنده SWC
  reactStrictMode: true, // فعال‌سازی حالت Strict React
  experimental: {
    appDir: true, // اگر از دایرکتوری اپلیکیشن استفاده می‌کنید
  },
};

export default nextConfig;
