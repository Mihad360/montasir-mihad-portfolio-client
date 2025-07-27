import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github-profile-summary-cards.vercel.app",
        pathname: "/**", // this is okay
      },
    ],
  },
};

export default nextConfig;
