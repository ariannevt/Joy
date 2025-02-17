
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

// Function that shows the current slide
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Function that changes the slides when clicking buttons. 
function plusSlides(n) {
  slideIndex += n;

  // Loop around if going past first or last slide
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  showSlides();
}

// Initialize slideshow with the first image
showSlides();
