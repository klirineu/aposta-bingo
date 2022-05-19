/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["img.shields.io"],
  },
  compiler: {
    styledComponents: true,
  },
};
module.exports = nextConfig;
