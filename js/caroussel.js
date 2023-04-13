const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const banner = document.querySelector("#banner");
const newBanner = document.createElement("img");
let dots = document.querySelector(".dots");

let nextSlide;
let prevSlide;
let index = 0;
let dot = document.createElement("span");
let dot1 = document.createElement("span");
let dot2 = document.createElement("span");
let dot3 = document.createElement("span");
dot.classList.add("dot");
dot1.classList.add("dot");
dot2.classList.add("dot");
dot3.classList.add("dot");
dots.appendChild(dot);
dots.appendChild(dot1);
dots.appendChild(dot2);
dots.appendChild(dot3);


if(bannerImg == null){
    newBanner.src=`./assets/images/slideshow/slide1.jpg`;
    newBanner.classList.add("banner-img");
    banner.appendChild(newBanner);  
    document.querySelector(".dot").classList.add("dot_selected");
} 

arrowRight.addEventListener('click', function(){
    document.querySelector(".dot").classList.remove("dot_selected");
    index = index + 1;
    if(index <= slides.length && index >= 0){
    const img = slides[index].image;
    newBanner.src=`../assets/images/slideshow/${img}`;
    newBanner.classList.add("banner-img");
    banner.appendChild(newBanner);
        if (index <= 4 || index >=0){ 
          let dotsChildren=  dots.childNodes;
          dotsChildren[index + 1].classList.add("dot_selected");
          dotsChildren[index ].classList.remove("dot_selected");
        }
    }
   else {
    index = 0;   
  }  

});

arrowLeft.addEventListener('click', function(){
  index = index - 1;
  if(index <= slides.length || index >= 0){
    const img = slides[index].image;
    newBanner.src=`../assets/images/slideshow/${img}`;
    newBanner.classList.add("banner-img");
    banner.appendChild(newBanner);
    if (index <= 4 || index >=0){ 
        let dotsChildren=  dots.childNodes;
        dotsChildren[index + 1].classList.add("dot_selected");
        dotsChildren[index + 2].classList.remove("dot_selected");
      }
  } else {
    index = 0;  
  }  
});
