// Lets create a shark
class Beer {
  constructor (x, y) {
      this.x = x;
      this.y = y;
      this.width = 20;
      this.height = 35;

      // Her we create a shark for each Object made with the Constructor
      var div = document.createElement("div");
      div.style.width = this.width + "px";
      div.style.height = this.heigth + "px";
      div.className = "beer";
      document.getElementById("game-container").appendChild(div);
      this.domRef = div;
    }

    // random number for Beer
    getRandom(min, max) {
        return (Math.floor(Math.random() * (max - min) + min))  ;
    }

    // Moving and placing the Beer
    move() {
        //adding vertical speed to Beer
        this.y += 0.5;
        // Check if beers is out of bounds bottom and left/right

        if (this.y > gameBoard.gameheight - 70) {
          this.reset();     
        } else if ( this.x > gameBoard.gamewidth - this.width) {
          this.reset();
        } 

        // Manipulates the DOM based on the x and y
        this.domRef.style.top =  this.y + "px";
        this.domRef.style.left = this.x + "px";
        // Check if surfboard hits beer
        this.points();
    }

    // Resets the Beer
    reset() {
      this.y = 0;   
      this.speed += 1;  
      // These are all the alternate startingpositions so tha we place the sharks according to the surfboard
      let startingPosistions = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375]
      this.x = startingPosistions[this.getRandom(0,16)] ;
      this.points();
    }

    sound() {
      var sound = new Audio("./sounds/dead.wav");
      sound.play();
    }

    // Detects Points for our Beers
    points() {
      let surfX1 = surfer.x;
      let surfX2 = surfer.x + surfer.width;
      let surfY1 = surfer.y;
      let surfY2 = surfer.y + surfer.height;

        if (this.x < surfX2 && this.x + this.width > surfX1 && 
          this.y < surfY2  && this.y + this.height > surfY1) {
          // This will when we get points
           this.reset(); 
           
        }  
    } 
}
