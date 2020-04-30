var http = require('http');
var url = require('url');

//var express = require('express');
//var app = express(); en utilisant express mais il faut faire : npm install express

var server2 = http.createServer(function(req,res) {
   var page = url.parse(req.url).pathname; //on va cree un path qui lorsqu'il va être appelé va appeler la page
   res.writeHead(200, {"Content-Type": "text/plain"});
   /*if(page == '/robot_genialoide') {
	res.write('Mon code Html à ecrire');
    }
   res.end();
});*/

app.get('/CapaciteRobot', function(req, res) {
   res.setHeader(200, {'Content-Type', 'text/plain'});
   
   
});// dans le cas ou on utilise express

app.use(function(req, res, next){
   res.setHeader('Content-Type', 'text/plain');
   res.status(404).send('Page not found');
});// affiche une page d'erreur 404
app.listen(8080); toujours dans le cas ou on utilise express

//server.listen(8080); 
