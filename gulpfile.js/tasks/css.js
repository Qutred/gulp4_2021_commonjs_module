/*
  use if need  css import , need to change path.css.src into one entry point
  const cssimport = require('gulp-cssimport')
  .pipe(cssimport())
*/

/*
  include to pipeline if you need concat all files in one
  const concat = require('gulp-concat')
  .pipe(concat('main.css'))
*/

const css = () => {
  return $.gulp
    .src($.path.css.src, { sourcemaps: $.app.isDev })
    .pipe(
      $.gp.plumber({
        errorHandler: $.gp.notify.onError((error) => ({
          title: 'CSS',
          message: error.message,
        })),
      })
    )
    .pipe($.gp.shorthand())
    .pipe($.gp.groupCssMediaQueries())
    .pipe($.gp.webpCss())
    .pipe($.gp.autoprefixer())
    .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
    .pipe($.gp.size({ title: 'before compression' }))
    .pipe($.gp.rename({ suffix: '.min' }))
    .pipe($.gp.csso())
    .pipe($.gp.size({ title: 'after compression' }))
    .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
}

module.exports = css
