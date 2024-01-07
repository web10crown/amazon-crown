/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["res.cloudinary.com"],
  },
   async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://apiamazon.vercel.app/api/:path*',
          },
        ]
      },
};

module.exports = nextConfig;
