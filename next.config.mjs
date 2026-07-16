/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // 1. Force Next.js to output a static HTML/CSS/JS bundle for GitHub Pages hosting
  output: 'export',
  
  images: {
    // 2. Disable default Node.js image optimization since GitHub Pages is a static server
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },

  // 3. IMPORTANT: Prepend the repository name for correct asset routing on GitHub Pages
  basePath: '/portfolio',
};

export default nextConfig;