/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org', 'lh3.googleusercontent.com'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig 