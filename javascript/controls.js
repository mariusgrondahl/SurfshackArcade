// Lets add some controls - Our grid is 16 times
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13 || surfer.movingState === 0) {
        if (shark.movingState === 0) {
            gameMessage.style.display = "none";
            shark.move();
            shark.movingState = 1;
        
        } else if (shark.movingState === 1) {
            surfer.reset();
            shark.movingState = 0;
            shark.move();
        }
       
    } else if (e.keyCode === 37) {
        surfer.left();
    } else if (e.keyCode === 39) {
        surfer.right();
    } else if (e.keyCode === 80) {
        surfer.pause();
        shark.pause();
    }
});
