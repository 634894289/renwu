/**
 * Created by Moon7 on 16/9/23.
 */

var gulp = require('gulp');


var minhtml = require('gulp-htmlmin'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');


gulp.task('html',function () {
    gulp.src('*.html')
        .pipe(minhtml({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('css',function () {
    gulp.src('src/css/**/*')
        .pipe(minifycss())
        .pipe(gulp.dest('dist/src/css/'));
});

gulp.task('image',function () {
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/src/img/'));
});

gulp.task('js',function () {
   gulp.src('src/js/**/*.js')
       .pipe(uglify())
       .pipe(gulp.dest('dist/src/js/'));
});

gulp.task('build', ['html', 'css', 'js', 'image']);