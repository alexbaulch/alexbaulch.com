'use strict';

var config = require('../config');
var del    = require('del');
var gulp   = require('gulp');

gulp.task('clean', function(cb) {

    return del([config.scripts.dist, config.styles.dist], cb);

});
