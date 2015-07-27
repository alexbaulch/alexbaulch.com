'use strict';

var $ = require('jquery');

setInterval(function() {
    if ( $('.page-home').hasClass('grey') ) {
        $('.page-home').removeClass('grey').addClass('green');
    }
    else if ( $('.page-home').hasClass('green') ) {
        $('.page-home').removeClass('green').addClass('yellow');
    }
    else if ( $('.page-home').hasClass('yellow') ) {
        $('.page-home').removeClass('yellow').addClass('grey');
    }
    else {
        $('.page-home').addClass('grey');
    }
}, 5000);