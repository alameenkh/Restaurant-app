/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://bigsloop.s3.amazonaws.com/images/restaurant/img'],
  }
}

module.exports = nextConfig
