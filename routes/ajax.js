var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res){
		switch(req.query.do){
		    case 'solveafterd':
			if(req.session.user){
		    	var xs = req.session.user["solve_after"];
				for(var i in xs){
		            if(xs[i]._id==req.query.id){
		                xs.splice(i,1);
		            }
		        }
				mongoose.model('users').update({_id: req.session.user["_id"]}, {solve_after: xs}, function(err){
					if(!err) res.send('ok');
				});
			}else {
				res.redirect('/');
			}
			break;
		    case 'solveaftera':
				if(req.query.id && req.session.user){
				    req.session.user["solve_after"].push({_id: req.query.id});
					mongoose.model('users').update({_id: req.session.user["_id"]}, {solve_after: req.session.user["solve_after"]}, function(err){
						if(!err) res.send('ok');
					});
				}else {
					res.redirect('/');
				}
			break;
			case 'answer':
				mongoose.model('problems').findOne({_id: req.query.id}, function(err, problem){
					if(problem.answer == req.query.answer){
						if(req.session.user){
							req.session.user["solved"].push({_id: req.query.id});
							var xs = req.session.user["solve_after"];
							for(var i in xs){
					            if(xs[i]._id==req.query.id){
					                xs.splice(i,1);
					            }
					        }
							mongoose.model('users').update({_id: req.session.user["_id"]}, {solved: req.session.user["solved"], solve_after: xs}, function(err){
								if(!err) res.send('TEBRİKLER, DOĞRU CEVAP!');
							});
						}else {
							res.send('TEBRİKLER, DOĞRU CEVAP!');
						}

						mongoose.model('problems').update({_id: req.query.id}, {$inc: {solved: 1}}, function(err){});
					}else {
						res.send('MAALESEF, YANLIŞ CEVAP!');
					}
				});
			break;
			case 'addfriend':
				req.session.user["friends"].push({_id: req.query.id});
				mongoose.model('users').update({_id: req.session.user["_id"]}, {friends: req.session.user["friends"]}, function(err){
					if(!err) res.send('ok');
				});
			break;
		    default:
				res.redirect('/');
		}
});

module.exports = router;
