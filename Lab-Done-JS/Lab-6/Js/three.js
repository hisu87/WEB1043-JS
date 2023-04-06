var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function firstSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = 0;
  slides[currentSlide].classList.add('active');
}

function lastSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = slides.length - 1;
  slides[currentSlide].classList.add('active');
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.first').addEventListener('click', firstSlide);
document.querySelector('.last').addEventListener('click', lastSlide);