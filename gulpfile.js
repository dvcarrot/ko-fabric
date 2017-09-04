var gulp = require('gulp');
var concat = require('gulp-concat');
var server = require('browser-sync');

gulp.task('vendor-scripts', function () {
    var files = [
        "bower_components/knockout/dist/knockout.js",
        "bower_components/knockout/dist/knockout.debug.js",
        "bower_components/office-ui-fabric-js/dist/js/fabric.min.js",
        "bower_components/jquery/dist/jquery.min.js",
        "bower_components/lodash/dist/lodash.min.js"
    ];
    return gulp.src(files)
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('build'))
});

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
