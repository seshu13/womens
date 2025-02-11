import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'apgnwrhgqmffsrsuftgg.supabase.co'
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com'
      },
      {
        protocol: 'https',
        hostname: 'youtube.com'
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com'
      }
    ],
  },
}

export default config
