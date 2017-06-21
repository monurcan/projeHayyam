var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res){
	var pn;
	mongoose.model('problems').find().sort('_id').limit(30).exec(function(err, problems){
		mongoose.model('problems').count({}, function(err, c){
			res.render('index', { title: 'projeHayyam', style: 'homepage', script: 'homepage', user: req.session.user, problems: problems, pn: Math.ceil(c/30), partials: {content: 'homepage'} });
		});
	});
});

module.exports = router;
