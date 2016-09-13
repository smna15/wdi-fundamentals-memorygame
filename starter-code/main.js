// console.log("JS file is connected to HTML! Woo!")

// var cardOne = "queen"
// var cardTwo = "queen"
// var cardThree = "king"
// var cardFour = "king"

var board = document.getElementById('game-board');

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

// create html element for each card with card class
// append to board
function createBoard() {
  for (var i=0; i < cards.length; i++) {
    var cardElement = document.createElement('div')
    cardElement.className = "card";
    cardElement.setAttribute('data-card', cards[i]);

    board.appendChild(cardElement);

    cardElement.addEventListener("click", isTwoCards);
  }
}

function isMatch() {
  if (cardOne === cardTwo) {
    // for queen card match
    alert("You found a match!");
  } else if (cardThree === cardFour) {
    // for king card match
    alert("You found a match!");
  } else {
    alert("Sorry, try again");
  }
}

function isTwoCards() {
  // add card to array of cards in play
  cardsInPlay.push(this.getAttribute('data-card'));

  if (this.getAttribute == "queen") {
    this.innerHTML = "<img src='queen.png' height='200px' width='150px'>";
  }
  if (this.getAttribute == "king") {
    this.innerHTML = "<img src='king.png' height='200px' width='150px'>";
  }


  // if you hae two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
  }
}

// create game board with 4 cards
createBoard();
