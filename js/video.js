var video;

window.addEventListener("load", function loadVideo(){
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	video.load();
	console.log("Good job opening the window")
	console.log("Auto play is set to false")
	console.log("Loop is set to false")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

function playButton(){
video.play();
document.querySelector("#volume").innerHTML = video.volume*100 + '%';
console.log("Play Video")

/*Upadating Volume*/ 
percentage = (video.volume * 100).toFixed(0)
}

function pauseButton(){
	console.log("Pause Video");
	video.pause()
}

function slowDown(){
	video.playbackRate *= 0.9;
	console.log("New speed: " + video.playbackRate.toFixed(2));
}

function speedUp(){
	video.playbackRate /= 0.9;
	console.log("New speed: " + video.playbackRate.toFixed(2));
}

function skipAhead(){
	video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }

	console.log("Current video time: " + video.currentTime);
}

function muteButton(){
	video.muted = !video.muted;
	if (video.muted){
		document.querySelector('#mute').textContent = 'Mute';
		document.querySelector("#volume").innerHTML = video.volume*100 + '%';
		console.log("Mute");
	}
	else{
		document.querySelector('#mute').textContent = 'Unmute';
		console.log("Unmute");
	}
}

function volumeSlider(){
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume *100 + '%';

}

function oldSchool(){
	video.classList.add('oldSchool');
}

function originFunc(){
	video.classList.remove('oldSchool');
}


document.querySelector('#pause').addEventListener('click',pauseButton);
document.querySelector('#play').addEventListener('click',playButton);
document.querySelector('#pause').addEventListener('click',pauseButton);
document.querySelector('#slower').addEventListener('click',slowDown);
document.querySelector('#faster').addEventListener('click',speedUp);
document.querySelector('#skip').addEventListener('click',skipAhead);
document.querySelector('#mute').addEventListener('click', muteButton);
document.querySelector('#slider').addEventListener('input', volumeSlider);
document.querySelector("#vintage").addEventListener("click", oldSchool);
document.querySelector("#orig").addEventListener("click", originFunc);