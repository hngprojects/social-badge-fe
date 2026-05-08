import type { NextConfig } from 'next';

import './src/env/server';
import './src/env/client';

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
  },
  allowedDevOrigins: ['172.20.10.7'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
