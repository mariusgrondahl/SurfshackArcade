// Lets start the Arcade
var gameBoard = new Game (600, 600);
var surfer = new Surfer (200, 500);

var shark = new Shark (50, 0);
var shark1 = new Shark (100, 0);
var shark2 = new Shark (150, 0);


gameBoard.controls();

// All the DOMmanipulation
let gameContainer = document.getElementById("game-container");

let surferContainer = document.getElementById("surfer");
let sharks = document.querySelectorAll(".sharks");

// We need to make this a part of the Game class
let sharkInstances = [shark, shark1, shark2];

let gameMessage =  document.getElementById("game-message");
let message = document.getElementById("message");

// Set gamesize to match Game object
gameContainer.style.width = gameBoard.gamewidth + "px";
gameContainer.style.height = gameBoard.gameheight + "px";



