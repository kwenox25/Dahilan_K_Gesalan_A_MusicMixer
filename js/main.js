let puzzleBoard = document.querySelector(".solar-board"),
	puzzlePieces = document.querySelectorAll("#solarSystem img"),
	dropZones = document.querySelectorAll(".drop-zone"),
	mainBoard = document.querySelector("#solarSystem"),
	draggedPiece = null,
	reset = document.querySelector("#reset"),

const
	planetAudio = document.querySelectorAll(".drop-zone img"),
	audioEl = document.querySelector("audio"),
	playButton = document.querySelector("#masterPlay"),
    pauseButton = document.querySelector("#masterPause"),
    rewindButton = document.querySelector("#masterRewind");
	

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
	audioEl.load();

	// now i can play audio without things breaking
	playTrack();
	// debugger;
}

function playTrack() { audioEl.play(); }

function pauseTrack() { audioEl.pause(); }

function rewindTrack() { audioEl.currentTime = 0; }


puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

planetAudio.forEach(song => song.addEventListener("click", loadAudio));

function resetGame() {
	document.location.reload();
}

playButton.addEventListener("click", playTrack);
pauseButton.addEventListener("click", pauseTrack);
rewindButton.addEventListener("click", rewindTrack);
reset.addEventListener("click", resetGame);

