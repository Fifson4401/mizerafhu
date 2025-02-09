/** @type {import('next').NextConfig} */
const deviceSizes = [320, 375, 575, 768, 1000, 1200, 1999]
const minimumCacheTTL = 86400

const nextConfig = {
  // output: 'export',
  // trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.fbcdn.net' // Wildcard for dynamic subdomains
      }
    ],
    deviceSizes,
    minimumCacheTTL,
    unoptimized: true,
  },
}

module.exports = nextConfig
