// window.onload=open;
//we cannot call it open(), since there is predefined function called open

var scene1, scene2, alert0, alert1, scene2_img, scene2_bat, bat1, bat2, bat3, scene2_vid, scene3, audio;


//count to 3
var count=0;
//play video once
var played1=false;
var played2=false;
var played3=false;
var played4=false;
var played5=false;
var played6=false;
var played7=false;



window.onload = function() {
	// scene1 = document.getElementsByClassName("scene1");
	audio = document.getElementById("myAudio"); 
	scene2 = document.getElementsByClassName("scene2");
	alert0 = document.getElementById("alert0");
	alert1 = document.getElementById("alert1");
	scene2_img = document.getElementsByClassName("scene2_img");
	scene2_bat = document.getElementsByClassName("scene2_bat");
	bat1 = document.getElementById("bat1");
	bat2 = document.getElementById("bat2");
	bat3 = document.getElementById("bat3");
	scene2_vid = document.getElementsByClassName("scene2_vid");
	scene3 = document.getElementsByClassName("scene3");


	// for (var i = 0; i < scene1.length; i++) {
	// 	scene1[i].style.display = "none";
	// }
	for (var i = 0; i < scene2_img.length; i++) {
		scene2_img[i].style.display = "block";
	}
	// for (var i = 0; i < scene2_bat.length; i++) {
	// 	if (i == 2) {
	// 		scene2_bat[i].style.display = "block";
	// 	} else {
	// 		scene2_bat[i].style.display = "none";
	// 	}
	// }
	bat3.style.display = "block";
	alert1.style.display = "none";
	for (var i = 0; i < scene2_vid.length; i++) {
		scene2_vid[i].style.display = "none";
	}
}

function closeAlert0() {
	alert0.style.display = "none";
}



function btn1() {
	if (played1 == false) {
		scene2_vid[0].style.display = "block";
		scene2_vid[0].play();
		scene2_vid[0].preload = "auto";
		played1 = true;
		console.log("once");
	} else {
		alert1.style.display = "block";
	}
}

function btn2() {
	if (played2 == false) {
		scene2_vid[1].style.display = "block";
		scene2_vid[1].play();
		scene2_vid[1].preload = "auto";
		played2 = true;
	} else {
		alert1.style.display = "block";
	}
}
function btn3() {
	if (played3 == false) {
		scene2_vid[2].style.display = "block";
		scene2_vid[2].play();
		scene2_vid[2].preload = "auto";
		played3 = true;
	} else {
		alert1.style.display = "block";
	}
}
function btn4() {
	if (played4 == false) {
		scene2_vid[3].style.display = "block";
		scene2_vid[3].play();
		scene2_vid[3].preload = "auto";
		played4 = true;
	} else {
		alert1.style.display = "block";
	}
}

function btn5() {
	if (played5 == false) {
		scene2_vid[4].style.display = "block";
		scene2_vid[4].play();
		scene2_vid[4].preload = "auto";
		played5 = true;
	} else {
		alert1.style.display = "block";
	}
}

function btn6() {
	if (played6 == false) {
		scene2_vid[5].style.display = "block";
		scene2_vid[5].play();
		scene2_vid[5].preload = "auto";
		played6 = true;
	} else {
		alert1.style.display = "block";
	}
}


function btn7() {
	if (played7 == false) {
		scene2_vid[6].style.display = "block";
		scene2_vid[6].play();
		scene2_vid[6].preload = "auto";
		played7 = true;
	} else {
		alert1.style.display = "block";
	}
}

function closeAlert1() {
	alert1.style.display = "none";
}

function getHome() {

	// count how many times user go back to the home page
	count = count + 1;
	for (var i = 0; i < scene2_bat.length; i++) {
		scene2_bat[i].style.display = "none";
	}

	if (count == 1) {
		audio.play();
		for (var i = 0; i < scene2_vid.length; i++) {
			// hide all the videos
			scene2_vid[i].style.display = "none";
			bat2.style.display = "block";
		}
	} else if (count == 2) {
		audio.play();
		for (var i = 0; i < scene2_vid.length; i++) {
			// hide all the videos
			scene2_vid[i].style.display = "none";
			bat1.style.display = "block";
		}
	} else {
		audio.play();
		window.open("index3.html");
	}

	// console.log("count is: " + count);
}
