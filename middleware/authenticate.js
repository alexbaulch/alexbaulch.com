'use strict';

module.exports = function authenticate(req, res, next) {
    if (req.session.user) {
        return next();
    } else {
        req.session.redirectRef = req.originalUrl;
    }
    res.format({
        json: function() {
            res.status(401).json({ message: 'Sorry, please login.' });
        },
        html: function() {
            res.redirect('/login');
        }
    });
};