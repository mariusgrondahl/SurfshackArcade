// Lets start this shit
var gameBoard = new Game (400, 600);
var surfer = new Surfer (200, 500);

var shark = new Shark (50, 0, "sharks");

// All the interaction
let gameContainer = document.getElementById("game-container");
let surferContainer = document.getElementById("surfer");
let sharkContainer = document.querySelector(".shark");


let gameTitle =  document.getElementById("game-title");
let gameMessage =  document.getElementById("game-message");
let message = document.getElementById("message");


// Set gamesize to match Game object
gameContainer.style.width = gameBoard.gamewidth + "px";
gameContainer.style.height = gameBoard.gameheight + "px";

surferContainer.style.width = surfer.width + "px";
surferContainer.style.height = surfer.heigth + "px";

// Her`s our Australian Surferboy
function getSurfer() {
    setInterval(() => {
        surferContainer.style.marginTop = surfer.y + "px";
        surferContainer.style.marginLeft = surfer.x + "px";
        }, intervalSpeed);
}

getSurfer();

// Lets add some SHARRRRRKS
function getSharks() {
    setInterval(() => {
        sharkContainer.style.marginTop = -shark.y + "px";
        sharkContainer.style.marginLeft = shark.x + "px";
        }, intervalSpeed );
}

getSharks();


/////////////// Lets work with sharkclass

// Here is our random number
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}





