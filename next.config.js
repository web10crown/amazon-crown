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
            source: '/api',
            destination: 'https://apiamazon.vercel.app/api/',
          },
        ]
      },
};

module.exports = nextConfig;
