let solarBoard = document.querySelector(".solar-board"),
	planetPieces = document.querySelectorAll("#solarSystem img"),
	dropZones = document.querySelectorAll(".drop-zone"),
	mainBoard = document.querySelector("#solarSystem"),
	draggedPiece = null,
	solarSystemImages = document.querySelectorAll(".solarSystem-image"),
	reset = document.querySelector("#reset"),
	planetAudio = document.querySelectorAll("#solarSystem img"),
	audioEl = document.querySelector("audio"),
	playButton = document.querySelector("#masterPlay"),
    pauseButton = document.querySelector("#masterPause"),
    rewindButton = document.querySelector("#masterRewind"),
	muteButton = document.querySelectorAll(".muteIcon"),
	playIcon = document.querySelectorAll(".playIcon"),
	closeIcon = document.querySelectorAll(".closeIcon");
	


function handleStartDrag() {
	console.log('Started dragging this piece:', this);
	draggedPiece = this;
}

function handleDragOver(event) {
	event.preventDefault();
	if (this.children.length === 0) {
		this.appendChild(draggedPiece);
		console.log('dragged over me');
	}
}

function handleDrop(e) {
	e.preventDefault();	
	console.log('dropped something on me');


	// let planet = draggedPiece;
	// let audioTrack = planet.dataset.trackref;
	// let audioEl = new Audio(`audio/${audioTrack}.mp3`);
	// audioEl.play();

	// // move the planet to the drop zone
	// this.appendChild(planet);
	
}

solarSystemImages.forEach(image => {
	image.addEventListener("dragstart", () => {
	  // Set the rotation style for the image to rotate infinitely
	  image.style.animation = "rotate 10s linear infinite";
	});
  });

function loadAudio() {
	// find the right audio track and play it based on the dataset attribute
	audioEl.src = `audio/${this.dataset.trackref}.mp3`;
	console.log('now playing', this);
	audioEl.load();

	// now i can play audio without things breaking
	playTrack();
	// debugger;
}

function playTrack() { audioEl.play(); }

function pauseTrack() { audioEl.pause(); }

function rewindTrack() { audioEl.currentTime = 0; }

function muteTrack() {
	if 	(audioEl.muted) {
		audioEl.muted = false;
		this.src = "images/mute.svg";
		console.log('I am unmuted.');
	} else
		 { audioEl.muted = true;
			this.src = "images/muted.svg";
			console.log('I am on mute.');
		 }
}

function resetGame() {
	document.location.reload();
}


function returnPlanet() {
	debugger;
	
}

planetPieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
planetAudio.forEach(song => song.addEventListener("drop", loadAudio));
playButton.addEventListener("click", playTrack);
pauseButton.addEventListener("click", pauseTrack);
rewindButton.addEventListener("click", rewindTrack);
reset.addEventListener("click", resetGame);
muteButton.forEach(mutes => mutes.addEventListener("click", muteTrack));
closeIcon.forEach(closes => closes.addEventListener("click", returnPlanet));


