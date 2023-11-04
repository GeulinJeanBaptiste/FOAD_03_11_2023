import { catalogue } from "./catalogue.js";
const nextbutton = document.querySelector("#next");
const prevbutton = document.querySelector("#prev");

globalThis.currentSlide = 0;


/* Fonction pour le boutton next */
function nextSlide() {
  const slide = catalogue[currentSlide];
  currentSlide = (currentSlide + 1) % catalogue.length;
  document.getElementById('image').src = slide.image;
  document.getElementById('title').innerText = slide.title;
  document.getElementById('artiste').innerText = slide.artiste;
};

const nextEvents = (nextSlide);
nextbutton.addEventListener("click", nextEvents);
nextSlide();


/* Fonction pour le boutton prev. */

function prevSlide() {
  const slide = catalogue[currentSlide];
  currentSlide = (currentSlide - 1 + catalogue.length) % catalogue.length;
  document.getElementById('image').src = slide.image;
  document.getElementById('title').innerText = slide.title;
  document.getElementById('artiste').innerText = slide.artiste;
};

const prevEvents = (prevSlide);
prevbutton.addEventListener("click", prevEvents);

// Pourquoi en activant prevSlide() il m'affiche d'abord la 2e image du tableau.
/* prevSlide(); */

setInterval(nextSlide, 4000);
