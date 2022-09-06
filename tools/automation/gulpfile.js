const gulp = require('gulp');
const server = require ('gulp-server-livereload');

gulp.task('build', (callback) => {
  console.log('Building the project');
  setTimeout(callback, 1200);

});

gulp.task('serve', (cb) => {
  gulp.src('www')
    .pipe(server({
      livereload: false,
      open: true,
    }
    ))

})

gulp.task('default', gulp.series('build', 'serve'));