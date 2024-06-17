//轮播图
let currentSlide = 0;
let slides = document.querySelector('.slides').children;
let slidesLength = slides.length;

function moveSlide(step) {
    currentSlide += step;
    if (currentSlide >= slidesLength) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slidesLength - 1;
    }
    
    let slidePosition = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${slidePosition}%)`;
}

setInterval(function() {
    moveSlide(1);
}, 3000);
