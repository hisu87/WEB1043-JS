var box = document.querySelector('.box');
var dropzone = document.querySelector('.dropzone');

box.addEventListener('dragstart', function(event) {
  event.dataTransfer.setData('text/plain', 'box');
});

dropzone.addEventListener('dragover', function(event) {
  event.preventDefault();
});

dropzone.addEventListener('drop', function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData('text/plain');
  if (data === 'box') {
    dropzone.appendChild(box);
  }
});