/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ← makes static HTML files
  basePath: '/elxora',        // ← CHANGE this to your repo name! Examples:
                              //   - repo = kevin/elxora          → '/elxora'
                              //   - repo = kevin/my-ai-tool      → '/my-ai-tool'
                              //   - If username.github.io (no repo name) → remove this line or set to ''
  assetPrefix: '/elxora/',    // ← same as basePath above (with trailing /)
  images: {
    unoptimized: true         // ← required for static export
  }
};

module.exports = nextConfig;
