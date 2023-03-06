let puzzleBoard = document.querySelector(".puzzle-board"),
    solarPieces = document.querySelectorAll("#solarSystem img"),
    dropZones = document.querySelectorAll('.drop-zone'),
    mainBoard = document.querySelector('#solarSystem'),
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



    //ad drag and drop event handling to the puzzle pieces
solarPieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
    
    // add the dragover AND the drop event handling to the drop zones
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
    
    // add the drop event handling
dropZones.forEach(zone => zone.addEventListener("dragover", handleDrop));