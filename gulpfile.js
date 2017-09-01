var gulp = require('gulp');
var concat = require('gulp-concat');
var server = require('browser-sync');

gulp.task('scripts', function () {
    var files = 'src/scripts/**/*.js';
    return gulp.src(files)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('build'))
});

gulp.task('build', ['scripts']);

gulp.task("watch", ['build'], function () {
    server.init({
        server: './',
        notify: false,
        open: true,
        ui: false
    });

    gulp.watch('src/scripts/**/*.js', ['scripts']);
    gulp.watch('*.html').on("change", server.reload);
});
