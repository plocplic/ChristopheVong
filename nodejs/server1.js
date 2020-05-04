var http = require('http');

var server = http.createServer(function(req, res) {

	res.writeHead(200, {"Content-Type": "text/html"});
	res.write('<html lang="fr">'+
	<link rel="stylesheet" href="robot.css">'+
   	<script src="robot.js"></script>'+
	<head>'+
		<title>Robot 2.0</title>'+
		<h1> Les Robots </h1>'+
   
	</head>'+

	<body>'+
		<h2> Bonjour ! </h2>'+
		
		<p>Tu veux découvrir les prouesses <b>extraordinaire</b> de nos robots ? </p>'+
      		<a href="http://localhost:8080/CapaciteRobot">Les robots génialoïdes</a>'+

	        <div class="robot">'+
      			<div id="tete"></div>'+
      
      			<div class="oeil" id="oeilD"></div>'+
      			<div class="oeil" id="oeilG"></div>'+
      
      			<div class="jambe" id="jambeD"></div>'+
      			<div class="jambe" id="jambeG"></div>'+
      
      			<div class="bras" id="brasD"></div>'+
      			<div class="bras" id="brasG"></div>'+
      
      			<div id="bouche"></div>'+
      			<div id="corps"></div>'+
      
      			<div class="antenne"></div>'+
   		</div>'+
		<button id="bouton">Appuie pour faire sauter le Robot</button>'+

		<div id="description_1">'+
    			<pre>'+
      			Les robots par exemple,
      			ça peut nager sous l'eau,
      			et à l'infini (mais il faut le recharger)
			Ils peuvent nettoyer la mer des déchets humains ou sauver des animaux en voix de disparition
   			</pre>'+
    				
  			</div>'+

  		<div id="description_2">'+
    			<pre>'+
      			Les robots dans un second exemple,
      			peuvent se déplacer sur Terre.
      			Et faire des choses qu'un humain ne pourrait pas.

			Par exemple faire des tunnels et ne pas trop s'épuiser, de manière très efficace.
    			</pre>'+
    				
  			</div>

  		<div id="description_3">'+
    			<pre>'+
      			Et ils peuvent voler !

			Voler mais pour faire quoi ? Peut-être sauver des avions.
    			</pre>'+
    				
  			</div>'+
		
		<div class="vertical">'+
		</div>'+
		 
	</body>'+
'</html>');
	res.end();
});
server.listen(8080); // taper http://localhost:8080 dans la barre de recherche pour afficher le serveur web
