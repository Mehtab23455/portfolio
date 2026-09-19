/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Automatically applies the basePath only when building for production/GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
};

export default nextConfig;