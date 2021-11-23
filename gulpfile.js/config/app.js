const isProd = process.argv.includes('--production')
const isDev = !process.argv.includes('--production')

module.exports = {
  isProd,

  isDev,

  htmlmin: { collapseWhitespace: isProd },

  pug: {
    pretty: isDev,
  },

  webpack: {
    mode: isProd ? 'production' : 'development',
  },

  imagemin: {
    verbose: true,
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg'],
  },

  rename: { suffix: '.min' },
}
