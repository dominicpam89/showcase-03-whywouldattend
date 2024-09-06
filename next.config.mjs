/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
     {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/frontend-showcase-8e5c7.appspot.com/o/**',
      }
    ],
  }
};

export default nextConfig;
