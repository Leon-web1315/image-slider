//==== DOM取得 ====
let container = document.getElementById("app");

let img = document.getElementById("slide");
let thumbs = document.querySelectorAll(".thumb");
let titleEl = document.getElementById("title");

//==== 状態 ====
let titles = ["画像１","画像２","画像３","画像４","画像５"];
let images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"];
let current = 0;

let isAnimating = false;

let timer;

//==== イベント登録 ====
thumbs.forEach(function(thumb, index){
    thumb.addEventListener("click",function(){
        handleThumbClick(index);
    });
});

img.onmouseover = function(){
    clearInterval(timer);
};
img.onmouseout = function(){
     startTimer();
};

document.addEventListener("keydown",function(e){
    if(e.key === "ArrowRight"){
        e.preventDefault();
        handleNext();
    }

    if(e.key === "ArrowLeft"){
        e.preventDefault();
        handlePrev();
    }
});



//==== UI設定 ====
let btnGroup = document.getElementById("btnGroup");


let prevBtn = document.getElementById("prevBtn");
prevBtn.addEventListener("click",handlePrev);

let stopBtn = document.getElementById("stopBtn");
stopBtn.addEventListener("click",handleStop);

let startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click",handleStart);

let nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click",handleNext);


//==== 初期起動 ====
startTimer();
updateSlide();