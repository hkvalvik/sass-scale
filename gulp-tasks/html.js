var fs = require('fs');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var marked = require('marked');

module.exports = function(gulp){
    return function(){
        var readme = marked(fs.readFileSync('readme.md', 'utf-8'));
        return gulp.src('demo/index.hbs')
            .pipe(
                handlebars({
                        readme: readme
                    },
                    {
                        batch : ['./demo']
                    })
            )
            .pipe(rename('index.html'))
            .pipe(gulp.dest('.'));
    };
};