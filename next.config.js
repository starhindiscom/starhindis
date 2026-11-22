/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'ytimg.com' },
      { protocol: 'https', hostname: 'linktr.ee' },
    ],
  },
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
