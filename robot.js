let d = new Date();
document.body.innerHTML = "<h3>Aujourd'hui nous sommes le " + d +"</h3>"

var positionRobot = 0;
var vBouton = document.getElementById("bouton");
vBouton.addEventListener("click", sauter);
var vRobot = getElementByClassName("robot");
function sauter(){
	positionRobot += '100px';
	vRobot.style.bottom = positionRobot;
}
