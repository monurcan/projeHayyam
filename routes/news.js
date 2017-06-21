var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var blogSchema = new mongoose.Schema({
	title: String,
	content: String,
	date: Date
});

mongoose.model('news', blogSchema);

router.get('/', function(req, res){
	mongoose.model('news').find({}).sort('-date').exec(function(err, posts){
		res.render('index', { title: 'Blog | Ç++', user: req.session.user,style: 'news', posts: posts, partials: {content: 'news'} });
	});
});

router.get('/:id', function(req, res){
	mongoose.model('news').findOne({_id: req.params.id}, function(err, posts){
		res.render('index', { title: 'Blog | '+posts.title, user: req.session.user,style: 'news', posts: posts, fs: 1, partials: {content: 'news'} });
	});
});

module.exports = router;