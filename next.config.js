const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  assetPrefix: isProd ? 'https://1up.health/products/model-privacy-notice' : ''
}
