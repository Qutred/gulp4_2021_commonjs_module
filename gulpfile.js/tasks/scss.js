const sass = require('gulp-sass')(require('sass'))

const scss = () => {
  return $.gulp
    .src($.path.scss.src, { sourcemaps: $.app.isDev })
    .pipe(
      $.gp.plumber({
        errorHandler: $.gp.notify.onError((error) => ({
          title: 'SCSS',
          message: error.message,
        })),
      })
    )
    .pipe($.gp.sassGlob())
    .pipe(sass())
    .pipe($.gp.webpCss())
    .pipe($.gp.autoprefixer())
    .pipe($.gp.shorthand())
    .pipe($.gp.groupCssMediaQueries())
    .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
    .pipe($.gp.size({ title: 'before compression' }))
    .pipe($.gp.rename($.app.rename))
    .pipe($.gp.csso())
    .pipe($.gp.size({ title: 'after compression' }))
    .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
}

module.exports = scss
