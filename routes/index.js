var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //if (req.session.user) return res.redirect('/login');

    res.render('');
});

module.exports = router;
