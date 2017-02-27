// less = require('gulp-less'),
// gulp.task('less', function() {
//   gulp.src('less/*.less')
//   .pipe(less())
//   .pipe(gulp.dest('css'))
//   .pipe(livereload());
// });


var gulp = require('gulp'),
    livereload = require('gulp-livereload');


gulp.task('index', function(){
  gulp.src('index.html').pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('index.html', ['index']);
});
