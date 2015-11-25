'use strict';

var path = require('path');

module.exports = {
    autoprefixer: {
        browsers: [
            'last 2 versions',
            'Android 4',
            'IE 8',
            'IE 9',
            'iOS >= 6'
        ]
    },
    browserSync: {
        proxy: 'localhost:8080'
    },
    production: (process.env.NODE_ENV === 'production'),
    sass: {
        style: 'expanded',
        sourceComments: 'map'
    },
    scripts: {
        dist:  path.join('public', 'scripts'),
        src:   'client'
    },
    styles: {
        dist:  path.join('public', 'css'),
        src:   'scss'
    }
};
