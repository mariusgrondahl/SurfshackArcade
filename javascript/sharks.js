// Lets create a shark
class Shark {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 70;
    this.speed = this.getRandom(1, 4);

    // Her we create a shark for each Object made with the Constructor
    var div = document.createElement("div");
    div.style.width = this.width + "px";
    div.style.height = this.heigth + "px";
    div.className = "sharks";
    document.getElementById("game-container").appendChild(div);
    this.domRef = div;
  }

  // random number for sharks
  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // Moving and placing the sharks
  move() {
    //adding vertical speed to sharks
    this.y = this.y + this.speed;
    // Check if sharks is out of bounds bottom and left/right

    if (this.y > gameBoard.gameheight + 50) {
      this.reset();
    } else if (this.x > gameBoard.gamewidth - this.width) {
      this.reset();
    }

    // Manipulates the DOM based on the x and y
    this.domRef.style.top = this.y + "px";
    this.domRef.style.left = this.x + "px";
    // check for collision when moving
    this.collision();
  }

  // Resets the sharks
  reset() {
    message.classList.add("animated", "shake");
    this.y = -20;
    this.speed = this.getRandom(1, 4);
    // These are all the alternate startingpositions so tha we place the sharks according to the surfboard
    let startingPosistions = [
      0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375,
    ];
    this.x = startingPosistions[this.getRandom(0, 16)];
  }

  sound() {
    var sound = new Audio("./sounds/error.mp3");
    sound.play();
  }

  // Detects Collision with other sharks
  collision() {
    let surfX1 = surfer.x;
    let surfX2 = surfer.x + surfer.width;
    let surfY1 = surfer.y;
    let surfY2 = surfer.y + surfer.height;

    if (
      this.x < surfX2 &&
      this.x + this.width > surfX1 &&
      this.y < surfY2 &&
      this.y + this.height > surfY1
    ) {
      // This will happen to our shark on collision
      gameBoard.highscore();
      gameBoard.reset();
      surfer.reset();
      this.sound();
    }
  }
}
