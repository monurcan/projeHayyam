var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
	res.render('index', { title: 'Hakkında | projeHayyam', user: req.session.user, partials: {content: 'about'} });
});

module.exports = router;
