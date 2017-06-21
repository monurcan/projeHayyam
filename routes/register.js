var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var session = require('express-session');
var nodemailer = require("nodemailer");

var Schema = require('mongoose').Schema;
var userSchema = new Schema({
  uname: String,
  pass: String,
  fname: String,
  about: String,
  solved: {
    type: Array,
    ref: 'problems'
  },
  email: String,
  friends: Array,
  solve_after: {
    type: Array,
    ref: 'problems'
  },
  verify: Number
}, { versionKey: false });
var User = mongoose.model('User', userSchema);

/* GET home page. */
router.get('/', function(req, res){
	if(!req.session.user){
		res.render('index', { title: 'Kayıt Ol | projeHayyam', style: 'login', script: 'register', partials: {content: 'register'} });
	}else {
		res.redirect('/');
	}
});

router.post('/', function(req, res){
	if(!req.session.user){
		if(req.body.uname == '' || req.body.uname == 'solveafter' || req.body.uname == 'settings' || req.body.pass == '' || req.body.email == '' || req.body.fname == '' || !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(req.body.email)){
			res.redirect('/register#e');
		}else {
			User.findOne({uname: req.body.uname}, function(err, user){
				if(user){
					res.redirect('/register#eu');
				}else {
					User.findOne({email: req.body.email}, function(err, email){
						if(email){
							res.redirect('/register#em');
						}else {
							var n = new User({"uname": req.body.uname,"pass": req.body.pass,"fname": req.body.fname,"about": req.body.fname+" hakkında...","solved": [],"email": req.body.email,"friends": [],"solve_after": [],"verify": 0});
							n.save(function(err, user){
								if(user){
									req.session.user = user;
									var transporter = nodemailer.createTransport({
									    service: 'Gmail',
									    auth: {
									        user: 'monurcan55@gmail.com',
									        pass: 'alikaan555'
									    }
									});

									var mailOptions = {
									    from: 'projeHayyam <proje@hayyam.com>',
									    to: user["email"],
									    subject: 'Aktivasyon İşlemi | projeHayyam',
									    text: 'Aktivasyon linki: http://213.74.158.213:3000/register/activate?id='+user["_id"],
									    html: 'Aktivasyon linki: <a href="http://213.74.158.213:3000/register/activate?id='+user["_id"]+'">http://213.74.158.213:3000/register/activate?id='+user["_id"]+'</a>'
									};

									transporter.sendMail(mailOptions);
									res.redirect('/profile');
								}else {
									res.redirect('/register#e');
								}
							});
						}
					});
				}
			});
		}
	}else {
		res.redirect('/');
	}
});

router.get('/activate', function(req, res){
	if(req.query.id){
		mongoose.model('users').update({_id: req.query.id}, {verify: 1}, function(err){
			if(!err) res.redirect('/login');
		});
	}else {
		res.redirect('/login');
	}
});

module.exports = router;