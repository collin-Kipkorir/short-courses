import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,        // Enabling React Strict Mode to help with potential issues during development.
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],  // Allows Next.js to treat these file types as pages.
};

export default nextConfig;
