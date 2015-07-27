'use strict';

var config  = require('./gulp/config');
var util    = require('gulp-util');

// What mode?
util.log('Running in', (config.production ? util.colors.red.bold('production') : util.colors.green.bold('development')), 'mode');

// Load tasks
var fs = require('fs');
fs.readdirSync('./gulp/tasks').forEach(function (task) {
    require('./gulp/tasks/' + task);
});