import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep production checks from overwriting a running development server's files.
  distDir: process.env.NODE_ENV === "production" ? ".next-build" : ".next",
  outputFileTracingRoot: process.cwd(),
  images: { formats: ["image/avif", "image/webp"] }
};

export default nextConfig;
