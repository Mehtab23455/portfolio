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

  // 3. IMPORTANT: If your repository is a project repo and NOT a user page, 
  // (e.g., https://username.github.io/portfolio-repo), 
  // uncomment the line below and replace 'portfolio-repo' with your exact repo name:
  // basePath: '/portfolio-repo',
};

export default nextConfig;