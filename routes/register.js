var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/', function(req, res, next) {
    var data = req.body;
    data.password = bCrypt.hashSync(data.password, bCrypt.genSaltSync(10), null);
    var user = new User(req.body);

    user.save(function (err) {
        if (err) {
            res.render('error', { error: err });
        } else {
            res.redirect('/user/' + user.slug);
        }
    });

});

module.exports = router;