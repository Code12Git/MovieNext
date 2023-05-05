/** @type {import('next').NextConfig} */
// next.config.js

const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  images: {
    domains: ["occ-0-3933-116.1.nflxso.net"],
  },
};

module.exports = nextConfig;
