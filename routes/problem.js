var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var sta = '';

/* GET home page. */
router.get('/:id', function(req, res){
	mongoose.model('problems').findOne({_id: req.params.id}, function(err, problem){
		if(!problem){
			res.redirect('/problem/1');
		}else {
			mongoose.model('problems').update({_id: req.params.id}, {$inc: {hit: 1}}, function(){
				if(req.session.user){
					var solved = {};
					var solve_after = {};
					var i = null;
					for(i = 0; req.session.user["solved"].length > i; i += 1){
						solved[req.session.user["solved"][i]._id] = req.session.user["solved"][i];
					}
					for(i = 0; req.session.user["solve_after"].length > i; i += 1){
						solve_after[req.session.user["solve_after"][i]._id] = req.session.user["solve_after"][i];
					}
					if(solved[req.params.id]){
						sta = '(Çözüldü)';
					}else if(solve_after[req.params.id]){
						sta = '(Çözülecek)';
					}else {
						sta = '';
					}
				}
				res.render('index', { title: problem.title + ' | projeHayyam', problem: problem,user: req.session.user, sta: sta, script: 'problem', style: 'problem', partials: {content: 'problem'} });
			});
		}
	});
});

module.exports = router;
