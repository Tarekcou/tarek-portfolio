import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Allows the build to continue even if ESLint fails
  },
};

export default nextConfig;
