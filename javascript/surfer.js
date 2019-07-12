
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
      this.x = gameBoard.gamewidth - this.width;
    }
  }

  up() {
    this.y = this.y - 25;
    if (this.y < 50) {
      this.y = 50;
    }
  }

  down() {
    this.y = this.y + 25;
    if (this.y > 500) {
      this.y = 500;
    }
  }

  reset () {
    this.x = 180;
    this.y = 500;
  }
  
} // Her we end surfer
