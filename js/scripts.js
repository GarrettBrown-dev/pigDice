//Business logic 

function Player(playerName, turnTotal, finalScore) {
  this.playerName = playerName;
  //this.turnTotal = turnTotal;
  //this.finalScore = finalScore;
}

//function add(number1, number2) {
  //return number1 + number2;
//}

//Player.prototype.add = function (number1, number2) {
  //return number1 + number2;
//}

Player.prototype.rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
}


Player.prototype.numberIsOne = function (number) {
  if (number == 1) {
    score = 0;
    //then other persons turn
  }
  else {
    //nothing happens, proceed to playerTurn function
    return number;
  }
}

Player.prototype.playerTurn = function (number) {
  //if the hold button is clicked
  this.turnTotal += this.finalScore;
  //if the hold button is not clicked
  number += this.turnTotal;
  return this.turnTotal;

}
//const cumulativeSum = (sum => value => sum += value)(0);
//UI
$(document).ready(function () {
  $("button#roll").submit(function(event)  {
    event.preventDefault();
    //roll the dice when roll button is pressed, return random number to current roll span
    let player1 = new Player("Alex", 0, 0 );
    
    let randomNumber = player1.rollDice();

    alert(randomNumber);

  




});


});

//$("#btn-primary").on("click", ".deleteButton", function () {
