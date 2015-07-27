'use strict';

var config    = require('../config');
var gulp      = require('gulp');
var modernizr = require('gulp-modernizr');
var path      = require('path');
var uglify    = require('gulp-uglify');

gulp.task('modernizr', ['scripts', 'styles'], function() {

    return gulp.src([
            path.join(config.styles.dist, '**', '*.css'),
            path.join(config.scripts.dist, '**', '*.js'),
            '!' + path.join(config.scripts.dist, 'modernizr.js') // Just incase
        ])
        .pipe(modernizr())
        .pipe(uglify())
        .pipe(gulp.dest(config.scripts.dist));

});
