var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('styles', function () {
  gulp.src('./sass.main.sass')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve'; function () {

  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./sass/*.sass', ['styles']);
  gulp.watch('./**/*html').on('change', browserSync.reload);
})
