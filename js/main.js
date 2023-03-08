const solarSystemImages = document.querySelectorAll('.solarSystem-image');
const dropZones = document.querySelectorAll('.drop-zone');

// Add event listeners for drag and drop
solarSystemImages.forEach(image => {
  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragend', dragEnd);
});

dropZones.forEach(zone => {
  zone.addEventListener('dragover', dragOver);
  zone.addEventListener('dragenter', dragEnter);
  zone.addEventListener('dragleave', dragLeave);
  zone.addEventListener('drop', drop);
});

// Drag functions
function dragStart() {
  this.classList.add('dragging');
}

function dragEnd() {
  this.classList.remove('dragging');
}

// Drop zone functions
function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function drop() {
  this.classList.remove('hovered');
  const draggedImage = document.querySelector('.dragging');
  this.appendChild(draggedImage);
}