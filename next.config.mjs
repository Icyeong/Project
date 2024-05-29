/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dominos.co.kr"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
