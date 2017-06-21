var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res){
	if(!req.session.user){
		res.render('index', { title: 'Giriş Yap | projeHayyam', style: 'login', script: 'login', partials: {content: 'login'} });
	}else {
		res.redirect('/');
	}
});

router.post('/', function(req, res){
	if(!req.session.user){
		if(req.body.uname == '' || req.body.pass == ''){
			res.redirect('/login#e');
		}else {
			mongoose.model('users').findOne({uname: req.body.uname,pass: req.body.pass,verify: 1}, function(err, user){
				if(user){
					req.session.user = user;
					res.redirect('/profile');
				}else {
					res.redirect('/login#e');
				}
			});
		}
	}else {
		res.redirect('/');
	}
});

module.exports = router;
