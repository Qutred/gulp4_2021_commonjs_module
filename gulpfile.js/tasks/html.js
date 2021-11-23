const html = () => {
  return $.gulp
    .src($.path.html.src)
    .pipe(
      $.gp.plumber({
        errorHandler: $.gp.notify.onError((error) => ({
          title: 'HTML',
          message: error.message,
        })),
      })
    )
    .pipe($.gp.webpHtml())
    .pipe($.gp.fileInclude())
    .pipe($.gp.size({ title: 'before compression' }))
    .pipe($.gp.htmlmin($.app.htmlmin))
    .pipe($.gp.size({ title: 'after compression' }))
    .pipe($.gulp.dest($.path.html.dest))
}

module.exports = html
