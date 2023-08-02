/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      appDir: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
  },
    images: {
      domains: ["upload.wikimedia.org"],
    },
  };
  
  module.exports = nextConfig;