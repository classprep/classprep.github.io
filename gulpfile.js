var gulp = require('gulp');
var livereload = require('gulp-livereload');


gulp.task('server', function(){
	return gulp.src('./src/**/*').pipe(livereload());
});


gulp.task('watch', function() {
    console.log('start watch');
    livereload.listen();
	   gulp.watch('./src/**/*', ['server']);

    console.log('end watch');
});

gulp.task('default', ['watch'], function(){});
