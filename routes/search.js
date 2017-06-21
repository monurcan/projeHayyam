var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var pn = '', sort = {_id: 'ascending'};
/* GET home page. */
router.get('/', function(req, res){
	if(req.param('pg') || req.param('src')){
		switch(req.param('sort')){
			case 'id':
				sort = {_id: 'ascending'};
			break;
			case 'idx':
				sort = {_id: 'descending'};
			break;
			case 'solved':
				sort = {solved: 'ascending'};
			break;
			case 'solvedx':
				sort = {solved: 'descending'};
			break;
			case 'diff':
				sort = {diff: 'ascending'};
			break;
			case 'diffx':
				sort = {diff: 'descending'};
			break;
			case 'hit':
				sort = {hit: 'descending'};
			break;
			default:
				sort = {_id: 'ascending'};
		}

		if(req.param('src')){
			var tags = req.param('src').match(/\[([a-zA-Z\s\ç\Ç\ö\Ö\ş\Ş\ı\İ\ğ\Ğ\ü\Ü\_]*)\]/g);
			if(tags){
				var cont = {"$and": []};
				if(req.param('src').replace(/\[.+\]/g, '').trim()){
					cont["$and"].push({"$and": []}, {title: new RegExp('.*'+req.param('src').replace(/\[.+\]/g, '').trim()+'.*', "i")});
						
					for(i=0;i<tags.length;i++){
						cont["$and"][0]["$and"].push({"tags": {"$elemMatch": {name: new RegExp('^'+tags[i].replace('[', '').replace(']', '')+'.*', "i")}}});
					}
				}else {
					for(i=0;i<tags.length;i++){
						cont["$and"].push({"tags": {"$elemMatch": {name: new RegExp('^'+tags[i].replace('[', '').replace(']', '')+'.*', "i")}}});
					}
				}

				mongoose.model('problems').count(cont, function(err, c){
					pn = Math.ceil(c/30);	
					mongoose.model('problems').find(cont).sort(sort).skip((req.param('pg')-1)*30).limit(30).exec(cont, function(err, ss){
						res.render('index', { title: req.param('src')+' | projeHayyam', user: req.session.user,style: 'search', script: 'search', sval: req.param('src'), problems: ss, pn: pn, partials: {content: 'search'} });
					});
				});
			}else {
				mongoose.model('problems').count({title: new RegExp('.*'+req.param('src').trim()+'.*', "i")}, function(err, c){
					pn = Math.ceil(c/30);	
					mongoose.model('problems').find({title: new RegExp('.*'+req.param('src').trim()+'.*', "i")}).sort(sort).skip((req.param('pg')-1)*30).limit(30).exec(function(err, problems){
						res.render('index', { title: req.param('src')+' | projeHayyam', user: req.session.user,style: 'search', script: 'search', sval: req.param('src'), problems: problems, pn: pn, partials: {content: 'search'} });
					});
				});
			}
		}else {
			mongoose.model('problems').count({}, function(err, c){
				pn = Math.ceil(c/30);
				mongoose.model('problems').find().sort(sort).skip((req.param('pg')-1)*30).limit(30).exec(function(err, problems){
					res.render('index', { title: 'Arşiv | projeHayyam', user: req.session.user,style: 'search', script: 'search', sval: req.param('src'), problems: problems, pn: pn, partials: {content: 'search'} });
				});
			});
		}
	}else {
		res.redirect('/');
	}
});

module.exports = router;
