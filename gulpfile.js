var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  gulp.src('stylesheets/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))  
});

gulp.task('watch', function() {
  gulp.watch('stylesheets/style.css', ['styles']);
});