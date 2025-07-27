import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'franklinpetfood.com',
      'images.stockcake.com',
      'res.cloudinary.com',
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
};

export default nextConfig;
