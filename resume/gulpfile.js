/**
 * Created by Moon7 on 16/10/22.
 */
var gulp = require('gulp');

var minicss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    minhtml = require('gulp-htmlmin'),
    miniimg = require('gulp-imagemin');

gulp.task('html',function () {
    gulp.src('html/*.html')
    .pipe(minhtml({collapseWhitespace:true}))
        .pipe(gulp.dest('./'));
});

gulp.task('css',function () {
    gulp.src('src/css/index.css')
        .pipe(concat('index.css'))

        .pipe(minicss())
        .pipe(gulp.dest('css/'));

});
gulp.task('img',function () {
    gulp.src('src/img/*')
        .pipe(miniimg())
        .pipe(gulp.dest('img'))
});
gulp.task('build',['html','css','img']);