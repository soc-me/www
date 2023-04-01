/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['localhost'],
  },
  devIndicators: {
    buildActivity: false
  }
}

module.exports = nextConfig
