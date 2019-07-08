// Global intervalSpeed
let intervalSpeed = 10;
// Gameboard Class
class Game {
  constructor (width, height){
    this.gamewidth = width;
    this.gameheight = height;
  }

  message() {
    message.innerHTML = "Ahhhhh, you drowned!!!";
    gameMessage.style.display = "flex";
    this.sharkattacks = this.sharkattacks +1;
  }
};

// Surfer Class
class Surfer {
  constructor (x, y) {
      this.x = x;
      this.y = y;
      this.width = 25;
      this.height = 70;
      this.interval = 0;
      this.sharkattacks = 0;
  }

  left() {
    this.x = this.x -25;
    if (this.x < 0) {
      this.x = 0;
    }
  }

  right() {
    this.x = this.x +25;
    if (this.x > 375) {
      this.x = 375;
    }
  }

  reset () {
    this.x = 180;
    this.y = 500;
  }
} // Her we end surfer


// Lets create a shark
class Shark {
  constructor (x, y) {
      this.x = x;
      this.y = y;
      this.width = 25;
      this.height = 40;
      this.interval = 0;
      this.movingState = 0;
      this.collisions = 0;
    }

    move() {
      this.interval = setInterval(() => {
        this.y = this.y - 2;
        this.movingState = 1;
        this.collision();
      }, intervalSpeed);
    }

    reset() {
      clearInterval(this.interval);
      this.interval = 0;
      this.y = 0;
      this.movingState = 0;
    }

    collision() {
      let sharkX1 = this.x;
      let sharkX2 = this.x + this.width;
      let sharkY1 = -this.y;
      let sharkY2 = -this.y + this.height;

      let surfX1 = surfer.x;
      let surfX2 = surfer.x + surfer.width;
      let surfY1 = surfer.y;
      let surfY2 = surfer.y + surfer.height;

      this.collisions = setInterval(() => {
  
        if (sharkX1 < surfX2 && sharkX2 > surfX1 && 
          sharkY1 < surfY2  && sharkY2 > surfY1) {
          // This will happen to our surfer on collision
          gameBoard.message();
          surfer.reset();
          // This will happen to Sharks on collison
          this.reset(); 
        
        }
        
      }, intervalSpeed); 
    }


}