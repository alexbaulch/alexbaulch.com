'use strict';

var browserSync = require('browser-sync');
var config      = require('../config');
var gulp        = require('gulp');
var path        = require('path');

gulp.task('watch', ['scripts', 'styles'], function() {

    // Create browserSync server
    browserSync(config.browserSync);

    // Watch .scss files
    gulp.watch(path.join(config.styles.src, '**', '*.scss'), ['styles']);

    // Watch .js files
    // gulp.watch(['shared/**/*.js', path.join(config.scripts.src, '**', '*.js'), path.join('components', '**', '*.js')], ['jshint']);

    // Watch .html files
    gulp.watch(path.join('views', '**', '*.html'), browserSync.reload);
});
