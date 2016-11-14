'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var watch = require('gulp-watch');


gulp.task('Nodemon', restartServer);

function restartServer() {
    nodemon({
        script: './bin/www',
        ext: 'js hbs scss sql'
    });
};


gulp.task('sass' , function() {
    gulp.src('./public/stylesheets/style.css')
        .pipe(sass())
        .pipe(gulp.dest('./public/stylesheets/'))
});



gulp.task('watch-sass', function() {
    //first argument is an array of files to watch, the second argument is an array of tasks to run when we detect changes
    gulp.watch(['./styles.scss'], ['sass']);
});



gulp.task('default', ['Nodemon', 'sass', 'watch-sass']);