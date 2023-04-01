const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg'
  ];
  
  const container = document.getElementById('slideshow-container');
  
  let currentIndex = 0;
  
  function showImage() {
    container.innerHTML = `<img src="${images[currentIndex]}" alt="Slideshow Image">`;
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
  }
  
  setInterval(showImage, 1000);