import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: 'sessionize.com',
        pathname: '/image/**',
        port: '',
        protocol: 'https',
      },
    ],
  },
  reactCompiler: true,
  typedRoutes: true,
};

module.exports = nextConfig;
