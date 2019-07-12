// Lets create a Reward
class Reward {
  constructor (x, y, image) {
      this.x = x;
      this.y = y;
      this.width = 25;
      this.height = 35;
      this.speed = this.getRandom(0,1.5)
      this.image = image;

      // Her we create Reward for each Object made with the Constructor
      var div = document.createElement("div");
      div.style.width = this.width + "px";
      div.style.height = this.heigth + "px";
      div.style.backgroundImage = this.image;
      div.className = "reward pointtext";
      document.getElementById("game-container").appendChild(div);
      this.domRef = div;
    }

    // random number for Reward
    getRandom(min, max) {
        return (Math.floor(Math.random() * (max - min) + min))  ;
    }

    // Moving and placing the Reward
    move() {
        //adding vertical speed to reward
        this.y += this.speed
        // Check if Reward is out of bounds bottom and left/right

        if (this.y > gameBoard.gameheight - 70) {
          this.reset();     
        } else if ( this.x > gameBoard.gamewidth - this.width) {
          this.reset();
        } 

        // Manipulates the DOM based on the x and y
        this.domRef.style.top =  this.y + "px";
        this.domRef.style.left = this.x + "px";
        // Check if player get points
        this.points();
    }

    // Resets the Rewards
    reset() {
      this.y = 0;   
      this.speed = this.getRandom(1,4)  
      // These are all the alternate startingpositions so tha we place the Points according to the surfboard
      let startingPosistions = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375]
      this.x = startingPosistions[this.getRandom(0,16)] ;
      this.points();
    }

    sound() {
      var sound = new Audio("./sounds/beerLevel.mp3");
      sound.play();
    }

    // Detects Points for our Points
    points() {
      let surfX1 = surfer.x;
      let surfX2 = surfer.x + surfer.width;
      let surfY1 = surfer.y;
      let surfY2 = surfer.y + surfer.height;

        if (this.x < surfX2 && this.x + this.width > surfX1 && 
          this.y < surfY2  && this.y + this.height > surfY1) {
          // This will when we get points
          if (this.image === "url('./img/beerx2.png')" || this.image === "url('./img/drinkx2.png')" ){
            gameBoard.score += 30;
          } else {
            gameBoard.score += 15;
            animateCSS('.pointtext', 'bounce')
          }
           this.reset(); 
           this.sound();
        }  
    } 
}
