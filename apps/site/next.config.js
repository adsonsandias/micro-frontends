/** @type {import('next').NextConfig} */

// const path = require('path')

const nextConfig = {
  // reactStrictMode: true,
  // transpilePackages: ['@repo/ui'],
  output: 'standalone',
  // experimental: {
  //   outputFileTracingRoot: path.join(__dirname, '../../'),
  // },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Set your origin
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ]
  },
}

export default nextConfig
