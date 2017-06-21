var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res){
	if(req.session.user){
		mongoose.model('problems').find({"$or": req.session.user["solved"]}, function(err, solved_problems){
			mongoose.model('users').find({"$or": req.session.user["friends"] }, function(err, friends){
				res.render('index', { title: req.session.user['uname']+' | projeHayyam', style: 'profile', script: 'profile', user: req.session.user,users: req.session.user,problems:solved_problems,friends:friends, partials: {content: 'profile'} });
			});
		});
	}else {
		res.redirect('/login');
	}
});

router.get('/:uname', function(req, res){
	if(req.params.uname == 'solveafter'){
		if(req.session.user){
			mongoose.model('problems').find({"$or": req.session.user["solve_after"] }, function(err, solveafter){
				res.render('index', { title: 'Sonra Çözülecekler | projeHayyam', style: 'solveafter', script: 'solveafter', user: req.session.user,problems:solveafter,partials: {content: 'solveafter'} });
			});
		}else {
			res.redirect('/login');
		}
	}else if(req.params.uname == 'settings'){
		if(req.session.user){
			res.render('index', { title: 'Hesap Ayarları | projeHayyam', style: 'settings', user: req.session.user,partials: {content: 'settings'} });
		}else {
			res.redirect('/login');
		}
	}else {
		mongoose.model('users').findOne({uname: req.params.uname}, function(err, user){
			if(user){
				mongoose.model('problems').find({"$or": user["solved"]}, function(err, solved_problems){
					mongoose.model('users').find({"$or": user["friends"] }, function(err, friends){
						var addf = 0;
						if(req.session.user){
							var fr = {};
							var i = null;
							for(i = 0; req.session.user["friends"].length > i; i ++){
								fr[req.session.user["friends"][i]._id] = req.session.user["friends"][i];
							}
							if(!fr[user["_id"]]){
								addf = 1;
							}
						}
						res.render('index', { title: user['uname']+' | projeHayyam', style: 'profile', script: 'profile', user: req.session.user,users: user,problems:solved_problems,friends:friends, addf:addf,partials: {content: 'profile'} });
					});
				});
			}else {
				res.redirect('/login');
			}
		});
	}
});

router.post('/settings', function(req, res){
	if(req.session.user){
		if(req.body.uname == '' || req.body.pass == '' || req.body.email == '' || req.body.fname == '' || req.body.about == '' || !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(req.body.email)){
			res.redirect('/profile/settings#e');
		}else {
			mongoose.model('users').findOne({uname: req.body.uname, _id: { $ne: req.session.user["_id"] } }, function(err, user){
				if(user){
					res.redirect('/profile/settings#eu');
				}else {
					mongoose.model('users').findOne({email: req.body.email, _id: { $ne: req.session.user["_id"] }}, function(err, email){
						if(email){
							res.redirect('/profile/settings#em');
						}else {
							req.session.user.uname = req.body.uname;
							req.session.user.pass = req.body.pass;
							req.session.user.fname = req.body.fname;
							req.session.user.about = req.body.about.replace(/\r\n/g, "<br>");
							req.session.user.email = req.body.email;
							mongoose.model('users').update({_id: req.session.user["_id"]}, req.session.user, function(err){
								if(!err) res.redirect('/profile');
							});
						}
					});
				}
			});
		}
	}else {
		res.redirect('/login');
	}
})

module.exports = router;
