// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',           // writes static site to /out
    images: { unoptimized: true },
    trailingSlash: true
  };
  
  export default nextConfig;