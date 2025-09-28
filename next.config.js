// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'export', // create static HTML
  basePath:'',
  assetPrefix: isProd ? '/my-portfolio/' : '',
  images: { unoptimized: true }, // GH Pages has no Next image optimizer
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true } // helps with GH Pages routing
}
