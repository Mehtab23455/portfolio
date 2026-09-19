/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Comment this out while developing locally. 
  // Uncomment it right before you push to GitHub Pages!
  // basePath: '/portfolio',
};

export default nextConfig;