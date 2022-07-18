/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.w3schools.com', "openweathermap.org"]
  }
}

module.exports = nextConfig
