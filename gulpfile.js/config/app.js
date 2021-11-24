const isProd = process.argv.includes('--production')
const isDev = !process.argv.includes('--production')
const webpackConfig = require('./webpack.config')

module.exports = {
  isProd,

  isDev,

  htmlmin: { collapseWhitespace: isProd },

  pug: {
    pretty: isDev,
  },

  webpack: webpackConfig,

  imagemin: {
    verbose: true,
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg'],
  },

  rename: { suffix: '.min' },
}
