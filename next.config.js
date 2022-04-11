/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['localhost', 'res.cloudinary']
  },
  styledComponents: true
}

module.exports = nextConfig
