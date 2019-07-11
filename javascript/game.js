// Gameboard Class
class Game {
  constructor (width, height){
    this.gamewidth = width;
    this.gameheight = height;
    this.interval = 0;
    this.score = 0;
    this.highScore = [];
  }

  startGame() {
    this.interval = setInterval(() => {
      // Activate controls
      for(let i = 0; i < sharkInstances.length; i++ ) {
            sharkInstances[i].move();
      }

      for(let i = 0; i < beerInstances.length; i++ ) {
        beerInstances[i].move();
      }
      // update scoreboard
      score.innerHTML = this.score;
      // Watch the surfsboards X position
      surferContainer.style.marginLeft = surfer.x + "px";
      }, 10 )
  }

  message() {
    message.innerHTML = "You where killed" + "</br>" + "by a shark!!!";
    gameMessage.style.display = "flex";
    surfer.reset()
  }

  scoreCount() {
    // Pushing the latest score to an array on reset
    this.highScore.push(this.score);
    // Getting the highest number of Highscoer and displaying it
    highscoreContainer.innerHTML = Math.max(this.highScore);
    // Reseting the score to zero on reset
    this.score = 0;
  }

  reset() {
    this.scoreCount();
    this.interval = clearInterval(this.interval);
    this.message();
    for(let i = 0; i < sharkInstances.length; i++ ) {
      sharkInstances[i].reset();
    }

    for(let i = 0; i < beerInstances.length; i++ ) {
      beerInstances[i].reset();
    }
  }

  controls () {
    document.addEventListener("keydown", function (e) {
      switch (e.keyCode) {
        case 13:
          gameBoard.reset();
          gameMessage.style.display = "none";
          gameBoard.startGame();
          break;
        case 37:
          surfer.left();
          break;
        case 39:
          surfer.right();
          break;
        default:
          console.log("this is not a key");
      }
    });
  }
};

