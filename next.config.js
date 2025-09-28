// next.config.js
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',                 // create static HTML
  basePath: isProd ? '/my-portfolio' : '',
  assetPrefix: isProd ? '/my-portfolio/' : '',
  images: { unoptimized: true },    // GH Pages has no Next image optimizer
  trailingSlash: true,              // helps with GH Pages routing
};
