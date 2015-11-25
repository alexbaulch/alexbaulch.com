var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
    // If we have a user go to home
    if (req.session.user) {
        return res.redirect('/admin');
    }

    res.render('login');
});

router.post('/', function(req, res, next) {
    var data = req.body;
    User.authenticate(data.email, data.password, function(user) {
        if (user) {
            // If we have a user regenerate the session
            req.session.regenerate(function(err) {
                // add them to the new session
                req.session.user = user.toObject({ virtuals: true });

                // redirect to the homepage
                res.redirect('/admin');
            });
        } else {
            // We have no valid user
            res.render('login', { error: 'Sorry, we could not log you in.' });
        }
    });
})

module.exports = router;