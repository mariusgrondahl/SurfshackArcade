// Lets start the Arcade
var gameBoard = new Game (400, 600);
var surfer = new Surfer (200, 500);

var shark = new Shark (25, 0);
var shark1 = new Shark (125, 0);
var shark2 = new Shark (100, 0);
var shark3 = new Shark (100, 0);
var shark4 = new Shark (200, 0);
var shark5 = new Shark (225, 0);
var shark6 = new Shark (225, 0);
var shark7 = new Shark (225, 0);
var shark8 = new Shark (225, 0);
var shark9 = new Shark (225, 0);
var shark10 = new Shark (225, 0);
var shark11 = new Shark (225, 0);
var shark12= new Shark (225, 0);
var shark13 = new Shark (225, 0);

// We need to make this a part of the Game class
let sharkInstances = [shark, shark1, shark2, shark3, shark4, shark5, shark6, shark7, shark8, shark9,shark10, shark11, shark12, shark13];

var reward1 = new Reward (200, 0, "url('./img/beer.png')" );
var reward2 = new Reward (300, 0, "url('./img/drink.png')" );
var reward3 = new Reward (100, 0, "url('./img/beerx2.png')" );
var reward4 = new Reward (35, 0, "url('./img/meat.png')" );
var reward5 = new Reward (35, 0, "url('./img/taco.png')" );
var reward6 = new Reward (35, 0, "url('./img/drinkx2.png')" );
var reward7 = new Reward (35, 0, "url('./img/mushroomx4.png')" );

// We need to make this a part of the Game class
let rewardInstances = [reward1, reward2, reward3, reward4, reward5, reward6, reward7];

gameBoard.controls();

// All the DOMmanipulation
let gameContainer = document.getElementById("game-container");

let surferContainer = document.getElementById("surfer");
let sharks = document.querySelectorAll(".sharks");

let gameMessage =  document.getElementById("game-message");
let message = document.getElementById("message");
let gameTitle = document.getElementById("game-title");

let score = document.getElementById("score");
let highscoreContainer = document.getElementById("highscore");

// Set gamesize to match Game object
gameContainer.style.width = gameBoard.gamewidth + "px";
gameContainer.style.height = gameBoard.gameheight + "px";


// For animation
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}