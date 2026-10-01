import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: import.meta.dirname,
  },
  experimental: {
    globalNotFound: true,
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

export default nextConfig;
