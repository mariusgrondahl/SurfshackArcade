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
    this.score = 0;
    this.interval = setInterval(() => {
      // Activate controls
      for(let i = 0; i < sharkInstances.length; i++ ) {
            sharkInstances[i].move();
      }

      for(let i = 0; i < rewardInstances.length; i++ ) {
        rewardInstances[i].move();
      }
      // update scoreboard
      score.innerHTML = this.score;
      // Watch the surfsboards X position
      surferContainer.style.marginLeft = surfer.x + "px";
      surferContainer.style.marginTop = surfer.y + "px";
      }, 10 )
  }

  message() {
    message.innerHTML = "You were killed" + "</br>" + "by a shark!!!";
    gameMessage.style.display = "flex";
    surfer.reset()
  }

  highscore() {
    // Pushing the latest score to an array on reset
    this.highScore.push(this.score);
    // Getting the highest number of Highscoer and displaying it
    highscoreContainer.innerHTML = Math.max(...this.highScore);
    // Reseting the score to zero on reset
  }

  reset () {
    this.interval = clearInterval(this.interval);
    this.message();
    for(let i = 0; i < sharkInstances.length; i++ ) {
      sharkInstances[i].reset();
    }

    for(let i = 0; i < rewardInstances.length; i++ ) {
      rewardInstances[i].reset();
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
        case 38:
          surfer.up();
          break;
          case 40:
              surfer.down();
              break;
        default:
          console.log("this is not a key");
      }
    });
  }
};

