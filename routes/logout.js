var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
    // Destroy session
    req.session.destroy();

    // Move user back to login
    res.redirect('/login');
});

module.exports = router;