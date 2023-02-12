const button= document.getElementById("but");
const list= document.getElementById("list");
const slider = document.querySelector(".slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

list.style.display="none";
button.addEventListener("click",(Event)=>
{
    if(list.style.display== "none"){
        list.style.display= "block"; 
    }
    else{
        list.style.display= "none";
    }
})


        nextBtn.addEventListener("click", () => {
          slides.forEach((slide) => {
            slide.classList.remove("active");
          });
          slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
          });
        
          slideNumber++;
        
          if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
          }
        
          slides[slideNumber].classList.add("active");
          slideIcons[slideNumber].classList.add("active");
        });
        
        //image slider previous button
        prevBtn.addEventListener("click", () => {
          slides.forEach((slide) => {
            slide.classList.remove("active");
          });
          slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
          });
        
          slideNumber--;
        
          if(slideNumber < 0){
            slideNumber = numberOfSlides - 1;
          }
        
          slides[slideNumber].classList.add("active");
          slideIcons[slideNumber].classList.add("active");
        });
        
        //image slider autoplay
        var playSlider;
        
        var repeater = () => {
          playSlider = setInterval(function(){
            slides.forEach((slide) => {
              slide.classList.remove("active");
            });
            slideIcons.forEach((slideIcon) => {
              slideIcon.classList.remove("active");
            });
        
            slideNumber++;
        
            if(slideNumber > (numberOfSlides - 1)){
              slideNumber = 0;
            }
        
            slides[slideNumber].classList.add("active");
            slideIcons[slideNumber].classList.add("active");
          }, 4000);
        }
        repeater();
        
        //stop the image slider autoplay on mouseover
        slider.addEventListener("mouseover", () => {
          clearInterval(playSlider);
        });
        
        //start the image slider autoplay again on mouseout
        slider.addEventListener("mouseout", () => {
          repeater();
        });

 const element = document.querySelector("#count");
const maxCount = 10;
let count = 0;
let hasCounted = false;

const interval = setInterval(() => {
    if (count <= maxCount && hasCounted) {
            element.textContent = count;
            count++;
        }
    if (count > maxCount){
            clearInterval(interval);
        }
    }, 600);
const card = document.querySelector("#card"); // Replace with the ID of your card element

function handleScroll() {
const cardPosition = card.getBoundingClientRect();
    if (cardPosition.top <= window.innerHeight && !hasCounted) {
            hasCounted = true;
        }
    }
        window.addEventListener("scroll", handleScroll);
        
const element1 = document.querySelector("#count1");
const maxCount1 = 17;
let count1 = 0;
let hasCounted1 = false;

const interval1 = setInterval(() => {
  if (count1 <= maxCount1 && hasCounted1) {
    element1.textContent = count1;
    count1++;
  }
  if (count1 > maxCount1) {
    clearInterval(interval1);
  }
}, 500);
const card1 = document.querySelector("#card1"); // Replace with the ID of your card element

function handleScroll1() {
  const cardPosition1 = card.getBoundingClientRect();
  if (cardPosition1.top <= window.innerHeight && !hasCounted1) {
    hasCounted1 = true;
  }
}
window.addEventListener("scroll", handleScroll1);

const element2 = document.querySelector("#count2");
const maxCount2 = 14;
let count2 = 0;
let hasCounted2 = false;

const interval2 = setInterval(() => {
  if (count2 <= maxCount2 && hasCounted2) {
    element2.textContent = count2;
    count2++;
  }
  if (count2 > maxCount2) {
    clearInterval(interval2);
  }
}, 400);

const card2 = document.querySelector("#card2"); // Replace with the ID of your card element

function handleScroll2() {
  const cardPosition2 = card.getBoundingClientRect();
  if (cardPosition2.top <= window.innerHeight && !hasCounted2) {
    hasCounted2 = true;
  }
}
window.addEventListener("scroll", handleScroll2);

const element3 = document.querySelector("#count3");
const maxCount3 = 10000;
let count3 = 8000;
let hasCounted3 = false;

const interval3 = setInterval(() => {
  if (count3 <= maxCount3 && hasCounted3) {
    element3.textContent = count3;
    count3++;
  }
  if (count3 > maxCount3) {
    clearInterval(interval3);
  }
}, 0.01);

const card3 = document.querySelector("#card3"); // Replace with the ID of your card element

function handleScroll3() {
  const cardPosition3 = card.getBoundingClientRect();
  if (cardPosition3.top <= window.innerHeight && !hasCounted3) {
    hasCounted3 = true;
  }
}
window.addEventListener("scroll", handleScroll3);

const h1 = document.querySelector('.ser h1');
const p = document.querySelector('.ser p');
const ser = document.querySelector('.ser');

function checkSlide() {
  const slideInAt = (window.scrollY + window.innerHeight) - h1.offsetHeight / 2;
  const serBottom = ser.offsetTop + ser.offsetHeight;
  const isHalfShown = slideInAt > ser.offsetTop;
  const isNotScrolledPast = window.scrollY < serBottom;

  if (isHalfShown && isNotScrolledPast) {
    h1.classList.add('slide');
    p.classList.add('slide2');
  } else {
    h1.classList.remove('slide');
    p.classList.remove('slide2');
  }
}

window.addEventListener('scroll', debounce(checkSlide));

// Debounce function to limit the rate at which the scroll event is fired
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    const context = this, args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}