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
            destination: 'https://api-amzn.vercel.app/api/',
          },
        ]
      },
};

module.exports = nextConfig;
