/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.jotfor.ms', 'cdn.sanity.io'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },

};

module.exports = nextConfig;
