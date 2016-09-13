// console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "king"
var cardFour = "king"

// if (cardOne === cardTwo) {
//   // for queen card match
//   alert("You found a match!");
// } else if (cardThree === cardFour) {
//   // for king card match
//   alert("You found a match!");
// } else {
//   alert("Sorry, try again");
// }

var board = document.getElementById('game-board');
var card = document.createElement('div').className('card');
var createBoard = function() {
  for (var i=0; i < 4; i++) {
    board.appendChild(card);
}

createBoard();
