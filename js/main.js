let puzzleBoard = document.querySelector(".solar-board"),
	puzzlePieces = document.querySelectorAll("#solarSystem img"),
	dropZones = document.querySelectorAll(".drop-zone"),
	mainBoard = document.querySelector("#solarSystem"),
	draggedPiece = null,
	reset = document.querySelector("#reset"),
	planetAudio = document.querySelectorAll("#solarSystem img"),
	solarSystemImages = document.querySelectorAll(".solarSystem-image"),
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
	
}

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
	} else { audioEl.muted = true;
	this.src = "images/muted.svg";
}
}

function resetGame() {
	document.location.reload();
}

function returnPlanet() {
	// debugger;
	// dropZones.forEach(zone => {
    //     while (zone.firstChild) {
    //         zone.removeChild(zone.firstChild);
    //     }
    // });

}

solarSystemImages.forEach(image => {
	image.addEventListener("dragstart", () => {
	  // Set the rotation style for the image to rotate infinitely
	  image.style.animation = "rotate 10s linear infinite";
	});
  });

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
planetAudio.forEach(song => song.addEventListener("drop", loadAudio));
playButton.addEventListener("click", playTrack);
pauseButton.addEventListener("click", pauseTrack);
rewindButton.addEventListener("click", rewindTrack);
reset.addEventListener("click", resetGame);
muteButton.forEach(mutes => mutes.addEventListener("click", muteTrack));
closeIcon.forEach(closes => closes.addEventListener("click", returnPlanet));


