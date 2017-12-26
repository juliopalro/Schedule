// Gulp config file
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

/**
 * Watchers
*/
gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.sass', ['sass']);
});