/** @type {import('next').NextConfig} */
const nextConfig = {
  // your config
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig