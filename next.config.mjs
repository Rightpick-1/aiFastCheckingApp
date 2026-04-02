/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: "/Rightpick-1/aiFastCheckingApp",
  assetPrefix: "/Rightpick-1/aiFastCheckingApp/"
};

export default nextConfig;
