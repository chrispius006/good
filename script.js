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