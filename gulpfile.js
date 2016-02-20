var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('css', function () {
    return gulp.src('example/example.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('example'));
});

gulp.task('watch', function(){
    gulp.watch(['**/**/*.scss', '!node_modules'], ['css']);
});

gulp.task('default', ['css', 'watch']);
