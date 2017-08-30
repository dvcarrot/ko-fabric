var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function () {
    var files = 'src/scripts/**/*.js';
    return gulp.src(files)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('build'))
});

gulp.task('build', ['scripts']);
