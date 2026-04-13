/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // Static export (`output: 'export'`) disables the Image Optimization API.
    // We still use `next/image` for DX (lazy loading, sizing, LCP hints).
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
