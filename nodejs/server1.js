var http = require('http');

var server = http.createServer(function(req, res) {

	res.writeHead(200, {"Content-Type": "text/html"});
	res.write('<p>code html a coller<p>'+
		  '<h1>en suivant ce format</h1>'+
                  '<p> compris ? </p>);
	res.end();
});
server.listen(8080); // taper http://localhost:8080 dans la barre de recherche pour afficher le serveur web
