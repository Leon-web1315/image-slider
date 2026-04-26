//==== イベント処理 ====
function handlePrev(){
    prevSlide();
    startTimer();
};
function handleStop(){
    clearInterval(timer);
};
function handleStart(){
    startTimer();
};
function handleNext(){
    nextSlide();
    startTimer();
};
function handleThumbClick(index){
    current = index;
    updateSlide();
    startTimer();
}
