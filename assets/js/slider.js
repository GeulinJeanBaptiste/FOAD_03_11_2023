import { catalogue } from "./catalogue.js";
const nextbutton = document.querySelector("#next");
/* const prevbutton = document.querySelector("#prev"); */


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





const nextEvents = (nextSlide);
nextbutton.addEventListener("click", nextEvents);





/* function prevSlide() {
  const slide = catalogue[currentSlide];
  document.getElementById('image').src = slide.image;
  document.getElementById('title').innerText = slide.title;
  document.getElementById('artiste').innerText = slide.artiste;
  currentSlide = (currentSlide - 1) % catalogue.length;
};
prevSlide();


const prevEvents = (prevSlide);

prevbutton.addEventListener("click", prevEvents); */
