import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
    };
    
    // Handle hls.js dependency issue
    config.resolve.alias = {
      ...config.resolve.alias,
      'hls.js': require.resolve('hls.js'),
    };
    
    return config;
  },
  
  // Configuration pour les assets statiques
  async headers() {
    return [
      {
        source: '/model.fbx',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'application/octet-stream',
          },
        ],
      },
    ];
  },
  
  // Configuration pour les assets publics
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Optimisation des images
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
