/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['localhost', 'res.cloudinary']
  }
}

module.exports = nextConfig
