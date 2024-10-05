/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "https://qrstok-api.my.id/",
        hostname: "qrstok-api.my.id",
      },
      {
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
