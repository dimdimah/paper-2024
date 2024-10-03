/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "https://qrstok-api.my.id/",
      },
    ],
  },
};

export default nextConfig;
