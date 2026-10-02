/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ada package-lock.json lain di folder induk; kunci root project ke folder ini.
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
