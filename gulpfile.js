var gulp = require('gulp');

gulp.task('css', require('./gulp-tasks/css')(gulp));
gulp.task('demo-css', require('./gulp-tasks/demo-css')(gulp));
gulp.task('html', require('./gulp-tasks/html')(gulp));

gulp.task('watch', function(){
    gulp.watch(['**/**/*.scss', '!node_modules'], ['css']);
    gulp.watch(['demo/**/*.scss'], ['demo-css']);
    gulp.watch(['demo/**/*.hbs'], ['html']);
});

gulp.task('default', ['css', 'demo-css', 'html', 'watch']);
