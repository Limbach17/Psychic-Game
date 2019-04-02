var alphabet = "abcdefghijklmnopqrstuvwxyz";
var letters = alphabet.split("");
/* for (abc = 0; abc < letters.length; abc++) {
    console.log(letters[abc]);
} */

var saladinChoice = letters[Math.floor(Math.random() * letters.length)];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

var winsText = document.getElementById("win-column");
console.log(winsText);
var lossesText = document.getElementById("loss-column");
var guessesLeftText = document.getElementById("guesses-left");
var guessesText = document.getElementById("guesses");

document.getElementById("gogamego").onclick = function () {
    document.getElementById("gameboard").style.display = "block";
}

document.onkeyup = function(event) {

        var userInput = event.key;
        var userGuess = userInput.toLowerCase();
        console.log(userGuess);

    function guessRight() {
        alert("You sly dog! At this rate, I'll have to order a Fatwa against you.");
        wins++;
        console.log("winner");
        guessesLeft = 9;
        guessesText.innerHTML = "Your guesses so far: ";
    }

    function guessWrong() {
        alert("Hah! Guess again, infidel.");
        guessesLeft--;
        console.log("Guesses left " + guessesLeft);
        guessesText.append(" " + userGuess + ",");

    }

    function gameOver() {
        alert("Your crusading fervor will only take you so far!");
        losses++;
        console.log("loser");
        guessesLeft = 9;
        guessesText.innerHTML = "Your guesses so far: ";
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

    
    winsText.innerHTML = "Wins: " + wins;
    lossesText.innerHTML = "Losses: " + losses;
    guessesLeftText.innerHTML = "Guesses left: " + guessesLeft;
    
};