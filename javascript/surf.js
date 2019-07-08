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
  constructor (x, y, classname) {
      this.x = x;
      this.y = y;
      this.width = 25;
      this.height = 40;
      this.interval = 0;
      this.collisions = 0;
      this.movingState = 0;
      this.classname = classname;
      
    }

    create() {
      var div = document.createElement("div");
      div.style.width = this.width + "px";
      div.style.height = this.heigth + "px";
      div.style.marginLeft = 25 + "px";
      div.className = this.classname;

      setInterval(() => {
        document.getElementById("game-container").appendChild(div);
      }, 2);
    }

    move() {
      this.interval = setInterval(() => {
        this.y = this.y - 2;
        this.movingState = 1;
        this.collision();
        if (this.y < -560 ){
          this.reset();
          this.x = this.x + 100;
          this.move();
        } 
      }, intervalSpeed);
    }

    reset() {
      clearInterval(this.interval);
      clearInterval(this.collisions);
      this.interval = 0;
      this.collisions = 0;
      this.movingState = 0;
      this.y = 0;
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
          this.reset(); 
          // Reset the mathematics on colission  
          sharkX1 = this.x;
          sharkX2 = this.x + this.width;
          sharkY1 = -this.y;
          sharkY2 = -this.y + this.height;
    
          surfX1 = surfer.x;
          surfX2 = surfer.x + surfer.width;
          surfY1 = surfer.y;
          surfY2 = surfer.y + surfer.height;
          
        }
        
      }, intervalSpeed); 
    } 


}



