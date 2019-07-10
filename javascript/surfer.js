
// Surfer Class
class Surfer {
  constructor (x, y) {
      this.x = x;
      this.y = y;
      this.width = 20;
      this.height = 70;
  }

  left() {
    this.x = this.x -25;
    if (this.x < 0) {
      this.x = 0;
    }
  }

  right() {
    this.x = this.x +25;
    if (this.x > gameBoard.gamewidth) {
      this.x = gameBoard.gamewidth - this.width -25;
    }
  }

  reset () {
    this.x = 180;
    this.y = 500;
  }
  
} // Her we end surfer
