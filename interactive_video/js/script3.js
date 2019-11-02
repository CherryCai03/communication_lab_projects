// scene3 functions
var scene3_vid;

scene3_vid = document.getElementsByClassName("scene3_vid");

function badEnd() {
		scene3_vid[0].style.display = "block";
		scene3_vid[0].play();
		scene3_vid[0].preload = "auto";
}

function goodEnd() {
		scene3_vid[1].style.display = "block";
		scene3_vid[1].play();
		scene3_vid[1].preload = "auto";
		
}

function wifeDivorce(){
	window.open("index4.html");
}

function wifeHug(){
	window.open("index5.html");
}