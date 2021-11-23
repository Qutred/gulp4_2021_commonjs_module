global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),

  path: require('./config/path'),
  app: require('./config/app'),
}

/* ---------------------------------- Tasks --------------------------------- */
const clear = require('./tasks/clear.js')
const server = require('./tasks/server.js')
const html = require('./tasks/html.js')
const pug = require('./tasks/pug.js')
const scss = require('./tasks/scss.js')
const css = require('./tasks/css.js')
const js = require('./tasks/js.js')
const img = require('./tasks/img.js')
const font = require('./tasks/font.js')

const watcher = () => {
  $.gulp.watch($.path.html.watch, html).on('all', $.browserSync.reload)
  $.gulp.watch($.path.scss.watch, scss).on('all', $.browserSync.reload)
  $.gulp.watch($.path.js.watch, js).on('all', $.browserSync.reload)
  $.gulp.watch($.path.img.watch, img).on('all', $.browserSync.reload)
  $.gulp.watch($.path.font.watch, font).on('all', $.browserSync.reload)
}

const build = $.gulp.series(
  clear,
  $.gulp.parallel(html, scss, js, img),
  $.gulp.parallel(server, watcher)
)

const dev = $.gulp.series(build, $.gulp.parallel(server, watcher))

/* --------------------------------- Exports -------------------------------- */
exports.html = html
exports.pug = pug
exports.css = css
exports.scss = scss
exports.js = js
exports.watch = watcher
exports.del = clear
exports.img = img
exports.font = font
exports.dev = dev
exports.build = build
exports.default = $.app.isProd ? build : dev
