var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res){
	delete req.session.user;
	res.redirect('/');
});

module.exports = router;
