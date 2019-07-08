// Lets add some controls - Our grid is 16 times
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        if (shark.movingState === 0) {
            gameMessage.style.display = "none";
            shark.move();
        }
       
    } else if (e.keyCode === 37) {
        surfer.left();
    } else if (e.keyCode === 39) {
        surfer.right();
    } else if (e.keyCode === 80) {
        // Here we have something for P if you want to pause
    }
});
