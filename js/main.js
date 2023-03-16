let 
	puzzleBoard = document.querySelector(".solar-board"),
	puzzlePieces = document.querySelectorAll("#solarSystem img"),
	dropZones = document.querySelectorAll(".drop-zone"),
	mainBoard = document.querySelector("#solarSystem"),
    draggedPiece = null;


function changeBGImage() {
		// Remove all dragged pieces from drop zones
		// Fix Bug 2
	dropZones.forEach(zone => {
        while (zone.firstChild) {
            zone.removeChild(zone.firstChild);
        }
    });

    puzzlePieces.forEach(piece => {
        piece.classList.remove("dropped");
        mainBoard.appendChild(piece);
    });

	puzzleBoard.style.backgroundImage = `url('images/backGround${this.id}.jpg')`;
}

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

