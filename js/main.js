let puzzleBoard = document.querySelector(".solar-board"),
	puzzlePieces = document.querySelectorAll(".solarSystem img"),
	dropZones = document.querySelectorAll(".drop-zone"),
	mainBoard = document.querySelector('.solarSystem'),
    draggedPiece = null;



function handleStartDrag() {
	console.log('Started dragging this piece:', this);
	draggedPiece = this;
}

function handleDragOver(event) {
	event.preventDefault();
	// Fix Bug 2
	if (this.children.length === 0) {
		this.appendChild(draggedPiece);
		console.log('dragged over me');
	}
}

function handleDrop(e) {
	e.preventDefault();
	
	console.log('dropped something on me');
}

puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

