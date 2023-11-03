import { catalogue } from "./catalogue.js";

let currentSlide = 0;

function nextSlide() {
  const slide = catalogue[currentSlide];
  document.getElementById('image').src = slide.image;
  document.getElementById('title').innerText = slide.title;
  document.getElementById('artiste').innerText = slide.artiste;
  currentSlide = (currentSlide + 1) % catalogue.length;
};
nextSlide();
setInterval(nextSlide, 4000);