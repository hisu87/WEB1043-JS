const stars = document.querySelectorAll('.star');

stars.forEach(function(star) {
  star.addEventListener('click', setRating);
});

function setRating(e) {
  const value = parseInt(e.target.getAttribute('data-value'));
  
  // Save rating value to database or do something else with it
}