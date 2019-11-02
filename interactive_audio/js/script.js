var blow;
var candle;
var cat;
var swing;
var waterdrops;
var doll;
var cat2;
var swing2;
var waterdrops2;
var doll2;
var candleOrNot;
var streamSource;
var analyser;
var dataArray;
var audioContext = new (window.AudioContext 
	|| window.webkitAudioContext)();
	navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
		streamSource = audioContext.createMediaStreamSource(stream);
		analyser = audioContext.createAnalyser();
		analyser.fftSize = 128;
		dataArray = new Uint8Array(analyser.frequencyBinCount);

		streamSource.connect(analyser);
		candleOrNot=true;

		setInterval(function(){
		analyser.getByteFrequencyData(dataArray);//the spetrum gets the average value of the amplitude  
		
		var total = 0;
		for (var i = 0 ; i < dataArray.length; i++) {
			total += dataArray[i];
		}
			total /= dataArray.length;
			console.log(total);

		if (total > 100 && candleOrNot==true){
			candle.pause();
			document.getElementById("candle-p").style.opacity= 0;
			setTimeout(button1, 3000);
			candleOrNot=false;
			console.log(candleOrNot);
		} 

		},50);

	}).catch(function(err){
		console.log(err);
	});

function onload(){
	blow = document.getElementById("blow-a");
	candle = document.getElementById("candle-a");
	cat = document.getElementById("cat1-a");
	swing = document.getElementById("swing1-a");
	waterdrops = document.getElementById("waterdrops1-a");
	doll = document.getElementById("doll1-a");
	newcat = document.getElementById("cat2-a");
	newswing = document.getElementById("swing2-a");
	newwaterdrops = document.getElementById("waterdrops2-a");
	newdoll = document.getElementById("doll2-a");
}

function button1(){
	var elements = document.getElementsByClassName("scene1");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "none";
	}

	var elements = document.getElementsByClassName("scene2");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "block";
	}
}

function button2(){
	var elements = document.getElementsByClassName("scene2");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "none";
	}

	var elements = document.getElementsByClassName("scene3");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "block";
	}
}

function button3(){
	var elements = document.getElementsByClassName("scene3");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "none";
	}

	var elements = document.getElementsByClassName("scene4");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "block";
	}

	cat.pause();
	doll.pause();
	swing.pause();
	waterdrops.pause();
}

function button4(){
	var elements = document.getElementsByClassName("scene4");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "none";
	}

	var elements = document.getElementsByClassName("scene5");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "block";
	}
}

function button5(){
	var elements = document.getElementsByClassName("scene5");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "none";
	}

	var elements = document.getElementsByClassName("scene6");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "block";
	}
}

function waterdrops1(){
	setTimeout(function(){ document.getElementById("waterdrops1-p").style.opacity = "1"; }, 2000);
	waterdrops.play();
}

function waterdrops1dis(){
	document.getElementById("waterdrops1-p").style.opacity = "0"; 
}

function cat1(){
	setTimeout(function(){ document.getElementById("cat1-p").style.opacity = "1"; }, 2000);
	cat.play();
}

function cat1dis(){
	document.getElementById("cat1-p").style.opacity = "0";
}

function swing1(){
	setTimeout(function(){ document.getElementById("swing1-p").style.opacity = "1"; }, 2000);
	swing.play();
}

function swing1dis(){
	document.getElementById("swing1-p").style.opacity = "0";
}

function doll1(){
	setTimeout(function(){ document.getElementById("doll1-p").style.opacity = "1"; }, 2000);
	doll.play();
}

function doll1dis(){
	document.getElementById("doll1-p").style.opacity = "0";
}

function waterdrops2(){
	document.getElementById("waterdrops2-p").style.opacity = "1";
}

function swing2(){
	document.getElementById("swing2-p").style.opacity = "1";
}

function doll2(){
	document.getElementById("doll2-p").style.opacity = "1";
}

function cat2(){
	document.getElementById("cat2-p").style.opacity = "1";
}

function play1(){
	newswing.play();
}
function play2(){
	newwaterdrops.play()
}
function play3(){
	newdoll.play()
}
function play4(){
	newcat.play()
}