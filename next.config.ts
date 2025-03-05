import { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  output: "export",
  distDir: "out", // Store static files in "out/"
  images: {
    unoptimized: true, // Required for static export if using <Image> component
  },
};

export default nextConfig;
