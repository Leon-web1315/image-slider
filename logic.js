//==== ロジック ====
function updateThumbs(){
    thumbs.forEach(function(thumb,index){
        thumb.classList.remove("active");
        if(index === current){
            thumb.classList.add("active");
        }
    });
}

function updateSlide(){
    img.src = images[current];
    titleEl.textContent = titles[current];
    updateThumbs();
};

function startTimer(){
    clearInterval(timer);
    timer = setInterval(nextSlide,2000);
};
function nextSlide(){
    if (isAnimating) return;
    isAnimating = true;

    img.classList.add("fade-out");

    setTimeout(function(){
        current = (current + 1) % images.length;
        updateSlide();
        img.classList.remove("fade-out");
        isAnimating = false;
    },400);
};
function prevSlide(){
     if (isAnimating) return;
    isAnimating = true;

    img.classList.add("fade-out");

    setTimeout(function(){
    current = (current - 1 + images.length) % images.length;
    updateSlide();
    img.classList.remove("fade-out");
    isAnimating = false;
    },400);
};