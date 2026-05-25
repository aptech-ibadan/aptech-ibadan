/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res-console.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "framer-motion",
    ],
    serverComponentsExternalPackages: [
      "mongoose",
      "bcryptjs",
      "jsonwebtoken",
      "sharp",
    ],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/public/**",
          "**/public/**/*.mov",
          "**/public/**/*.mp4",
          "**/public/**/*.MOV",
          "**/public/**/*.HEIC",
          "**/public/**/*.heic",
          "**/public/**/*.pptx",
          "**/public/**/*.bin",
          "**/public/**/Arena_*",
          "**/public/**/Screenshot*",
          "**/assets/aptech*.jpeg",
          "**/assets/APTECHLOGO.png",
          "**/assets/home-pageBg.png",
          "**/assets/**/*.MOV",
          "**/assets/**/*.mov",
        ],
      };
    }
    return config;
  },
};

export default nextConfig;
