import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloud / browser testing often hits 127.0.0.1 while `next dev` binds as localhost
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
