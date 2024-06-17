 function updateTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById('time').textContent = timeString;
}

// 每秒钟更新时间
setInterval(updateTime, 1000);



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
