var alphabet = "abcdefghijklmnopqrstuvwxyz";
var letters = alphabet.split("");
/* for (abc = 0; abc < letters.length; abc++) {
    console.log(letters[abc]);
} */

var saladinChoice = letters[Math.floor(Math.random() * letters.length)];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

var winsText = document.getElementById("win-coloumn");
var lossesText = document.getElementById("loss-column");
var guessesLeftText = document.getElementById("guesses-left");
var guessesText = document.getElementById("guesses");

document.getElementById("gogamego").onclick = function () {
    document.getElementById("gameboard").style.display = "block";
}

document.onkeyup = function (event) {

        var userInput = event.key;
        var userGuess = event.key.toLowerCase();
        console.log(userGuess);

    function guessRight(userGuess) {
        alert("You sly dog! At this rate, I'll have to order a Fatwa against you.");
        wins++;
        guessesLeft = 9;
        guessesText.textContent = "";
    }

    function guessWrong(userGuess) {
        alert("Hah! Guess again, infidel.");
        guessesLeft--;
        guessesText = " " + userGuess.toUpperCase() + ",";
    }

    function gameOver(userGuess) {
        alert("Your crusading fervor will only take you so far!");
        losses++;
        guessesLeft = 9;
        guessesText.textContent = "";
    }



    

    if (userGuess === saladinChoice) {
        guessRight(userGuess);
    }

    else if ((userGuess !== saladinChoice) && (guessesLeft > 0)) {
        guessWrong(userGuess);
    }

    else {
        gameOver(userGuess);
    }
};