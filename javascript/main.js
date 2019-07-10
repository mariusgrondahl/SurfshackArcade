// Lets start the Arcade
var gameBoard = new Game (400, 600);
var surfer = new Surfer (200, 500);

var shark = new Shark (25, 0);
var shark1 = new Shark (125, 0);
var shark2 = new Shark (100, 0);
var shark3 = new Shark (100, 0);
var shark4 = new Shark (200, 0);
var shark5 = new Shark (225, 0);

// We need to make this a part of the Game class
let sharkInstances = [shark, shark1, shark2, shark3, shark4, shark5];


gameBoard.controls();

// All the DOMmanipulation
let gameContainer = document.getElementById("game-container");

let surferContainer = document.getElementById("surfer");
let sharks = document.querySelectorAll(".sharks");

let gameMessage =  document.getElementById("game-message");
let message = document.getElementById("message");
let gameTitle = document.getElementById("game-title");

let score = document.getElementById("score");

// Set gamesize to match Game object
gameContainer.style.width = gameBoard.gamewidth + "px";
gameContainer.style.height = gameBoard.gameheight + "px";



