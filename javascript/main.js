// Lets start this shit
var gameBoard = new Game (400, 600);
var surfer = new Surfer (200, 500);
var shark = new Shark (50, 0);
var shark1 = new Shark (75, 0);

let intervalSpeed = 10;

// All the interaction
let gameContainer = document.getElementById("game-container");
let surferContainer = document.getElementById("surfer");
let sharkContainer = document.getElementById("shark");
let gameTitle =  document.getElementById("game-title");
let gameMessage =  document.getElementById("game-message");
let message = document.getElementById("message");


// Set gamesize to match Game object
gameContainer.style.width = gameBoard.gamewidth + "px";
gameContainer.style.height = gameBoard.gameheight + "px";


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
        shark.collision();
        }, intervalSpeed );
}

getSharks();




