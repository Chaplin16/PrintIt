const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const banner = document.querySelector("#banner");
const newBanner = document.createElement("img");
let dots = document.querySelector(".dots");
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const dot4 = document.querySelector(".dot4");

let nextSlide;
let prevSlide;
dots = [dot1,dot2,dot3,dot4];

if(bannerImg == null){
    newBanner.src=`./assets/images/slideshow/slide1.jpg`;
    newBanner.classList.add("banner-img");
    banner.appendChild(newBanner);
    dot1.classList.add("dot_selected");
}

//ecouteurs d'évènements
arrowRight.addEventListener("click", function(){
    for (let i=0; i<slides.length; i++){
        nextSlide = slides[i+1].image
        newBanner.src=`../assets/images/slideshow/${nextSlide}`;
        newBanner.classList.add("banner-img");
        banner.appendChild(newBanner);
        break;
    }
    for(let i=0; i<dots.length; i++){
       let dot =  dots[i+1];
       dot.classList.toggle("dot_selected");
       break
    }
});

arrowLeft.addEventListener("click", function(){
    alert("c'est bon à gauche");
    for (let i=0; i<slides.length; i++){
        
    }
});

dot1.addEventListener("click", function(){
    dot1.classList.add("dot_selected");
    newBanner.src=`../assets/images/slideshow/slide1.jpg`;
    banner.appendChild(newBanner);
})

dot2.addEventListener("click", function(){
    dot2.classList.add("dot_selected");
    newBanner.src=`../assets/images/slideshow/slide2.jpg`;
    banner.appendChild(newBanner);
})

dot3.addEventListener("click", function(){
    dot3.classList.add("dot_selected");
    newBanner.src=`../assets/images/slideshow/slide3.jpg`;
    banner.appendChild(newBanner);
})

dot4.addEventListener("click", function(){
    dot4.classList.add("dot_selected");
    newBanner.src=`../assets/images/slideshow/slide4.png`;
    banner.appendChild(newBanner);
})


