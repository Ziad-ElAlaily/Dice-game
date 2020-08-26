
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

document.getElementById("imag1").src = "images/dice" + randomNumber1 + ".png";


var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

document.getElementById("imag2").src = "images/dice" + randomNumber2 + ".png";

if(randomNumber1 > randomNumber2){
  document.querySelector('#winner').innerHTML = "Player 1 is the winner.";
} else if (randomNumber1 < randomNumber2){
  document.querySelector('#winner').innerHTML = "Player 2 is the winner.";
} else {
  document.querySelector('#winner').innerHTML = "Draw";
}
