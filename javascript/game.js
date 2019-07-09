// Gameboard Class
class Game {
  constructor (width, height){
    this.gamewidth = width;
    this.gameheight = height;
    this.interval = 0;
    
  }

  message() {
    message.innerHTML = "Ahhhhh, you drowned!!!";
    gameMessage.style.display = "flex";
    surfer.reset()
  }

  startGame() {
    this.interval = setInterval(() => {
      // Activate controls
      shark.move();
      shark1.move();
      shark2.move();
      // Watch the surfsboards X position
      surferContainer.style.marginLeft = surfer.x + "px";
      }, 10 )
  }


  controls () {
    document.addEventListener("keydown", function (e) {
      switch (e.keyCode) {
        case 13:
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

