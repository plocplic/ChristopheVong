var express = require('express');
var session = require('cookie-session'); //on va faire en sorte d'avoir des cookie de session mais sécurisé
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});

var app = express();

app.use(session({secret: 'cookiesecret'}))

.use(function(req, res, next){
	if(typeof(req.session.todolist) == 'undefined') {
		req.session.todolist = [];
	}
	next();
})

.get('/robotCap', function(req, res) {
	res.render('robotCap.ejs', {todolist: req.session.todolist});//faut cree un fichier robotCap.ejs
})

.post('/robotCap/ajouter/', urlencodedParser, function(req, res) {
	if(req.body.newtodo != ''){
	   req.session.todolist.push(req.body.newtodo);
	}
	res.redirect('/robotCap');
})

.get('/robotCap/supprimer/:id', function(req,res) {
	if(req.params.id !=''){
	req.session.todolist.splice(req.params.id, 1);
	}
	res.redirect('/robotCap');
})

.use(function(req, res, next){
	res.redirect('/robotCap');
})
.listen(8080);

