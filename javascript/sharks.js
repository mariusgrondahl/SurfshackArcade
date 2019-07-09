// Lets create a shark
class Shark {
  constructor (x, y) {
      this.x = x;
      this.y = y;
      this.width = 25;
      this.height = 70;

      

      // Her we create a shark for each Object made with the Constructor
      var div = document.createElement("div");
      div.style.width = this.width + "px";
      div.style.height = this.heigth + "px";
      div.style.marginLeft = this.x + "px";
      div.className = "sharks";
      document.getElementById("game-container").appendChild(div);
      this.domRef = div;
    }

    // random number for sharks
    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Moving and placing the sharks
    move() {
        // check for collision when moving
        this.collision();
        //adding vertical speed to sharks
        this.y = this.y - 3;

        // Check if sharks is out of bounds bottom and left/right
        if (this.y < -gameBoard.gameheight + this.height ){
          this.reset();
          this.x = this.x + 100;
        } else if (this.y < -560 || this.x > gameBoard.gamewidth - 30) {
          this.x = 0;
        }
        
        // Manipulates the DOM based on the x and y
        this.domRef.style.marginTop = -this.y + "px";
        this.domRef.style.marginLeft = this.x + "px";
    }

    // Resets the sharks
    reset() {
      this.y = 0;
    }

    // Detects Collision with other sharks
    collision() {

      let surfX1 = surfer.x;
      let surfX2 = surfer.x + surfer.width;
      let surfY1 = surfer.y;
      let surfY2 = surfer.y + surfer.height;

        if (this.x < surfX2 && this.x + this.width > surfX1 && 
          -this.y < surfY2  && -this.y + this.height > surfY1) {
          // This will happen to our shark on collision
          gameBoard.message();
          surfer.reset();
          this.reset();
        }  
    } 
}

