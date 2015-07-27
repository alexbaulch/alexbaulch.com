'use strict';

var browserSync     = require('browser-sync');
var config          = require('../config');
var gulp            = require('gulp');
var path            = require('path');
var stripDebug      = require('gulp-strip-debug');
var uglify          = require('gulp-uglify');
var util            = require('gulp-util');
var browserify      = require('browserify');
var source          = require('vinyl-source-stream');
var watchify        = require('watchify');
var errorHandler    = require('../utilities/errorHandler');

gulp.task('scripts', function() {

    var scripts = [path.join(config.scripts.src, '**', '*.js')];

    if (config.production) {
        scripts.push('!' + path.join(config.scripts.src, 'modernizr.js'));
    }

    var bundler = browserify({
        entries: ['./src/scripts/app.js'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    });

    var watcher  = watchify(bundler);

    return watcher
        .on('update', function () {
            var updateStart = Date.now();
            util.log('Watchify update', util.colors.red.bold('started'));
            watcher.bundle()
            .on('error', errorHandler)
            .pipe(source('app.js'))
            .pipe(config.production ? stripDebug() : util.noop())
            .pipe(config.production ? uglify() : util.noop())
            .pipe(gulp.dest(config.scripts.dist));
            util.log('Watchify update', util.colors.green.bold('completed'), 'in', util.colors.green.bold(Date.now() - updateStart), 'ms');
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(config.production ? stripDebug() : util.noop())
        .pipe(config.production ? uglify() : util.noop())
        .pipe(gulp.dest(config.scripts.dist));
});