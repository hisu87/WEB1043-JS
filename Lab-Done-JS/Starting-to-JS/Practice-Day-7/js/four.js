const images = [
    'https://cdn.dribbble.com/userupload/5452000/file/original-92df8cb7c397e3bf76423aa45cd5e53b.jpg?compress=1&resize=808x808',
    'https://cdn.dribbble.com/userupload/5434865/file/original-fd163a012bfdfbdc14f118b881316ded.jpg?compress=1&resize=1200x800',
    'https://cdn.dribbble.com/userupload/5418660/file/original-72cf514322c580680ba46246c85ec15d.jpg?compress=1&resize=640x905',
    'https://cdn.dribbble.com/users/904433/screenshots/6259018/functionnal_dribbble.png',
    // Add more image URLs here...
  ];
  
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageUrl = images[randomIndex];
    return randomImageUrl;
  }
  
  function displayRandomImage() {
    const imageUrl = getRandomImage();
    const img = document.createElement('img');
    img.src = imageUrl;
    document.body.appendChild(img);
  }
  
  displayRandomImage();