// Gameboard Class
class Game {
  constructor (width, height){
    this.gamewidth = width;
    this.gameheight = height;
  }
};


// Surfer Class
class Surfer {
  constructor (x, y) {
      this.x = x;
      this.y = y;
      this.interval = 0;
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
    clearInterval(this.interval);
    this.x = 180;
    this.y = 500;
  }




  message() {
      message.innerHTML = "Ahhhhh, you died!!!";
      gameMessage.style.display = "flex";
      gameMessage .classList.add("animated", "bounceInTop");
  }

  pause() {
    clearInterval(this.interval);
  }


} // Her we end surfer


// Lets create a shark
class Shark {
  constructor (x, y) {
      this.x = x;
      this.y = y;
      this.interval = 0;
      this.movingState = 0;
    }

    

    move() {
      this.interval = setInterval(() => {
        this.y = this.y - 2;
        this.movingState = 0;
      }, intervalSpeed);
    }

    reset() {
      clearInterval(this.interval);
      this.y = 0;

    }

    collision() {
      this.interval = setInterval(() => {
        if (this.y === -480 && this.x === surfer.x) {
          surfer.reset();
          this.y = 0;
          surfer.message();
        }
      }, intervalSpeed); 
    }


}