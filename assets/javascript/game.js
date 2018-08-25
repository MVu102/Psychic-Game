
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Wins and Losses
var wins = 0;
var losses = 0;
var guesses = 10;
var lettersGuessed = [];
var computerGuess =[];

window.onload = function() {
	var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
	computerGuess.push(computerChoice);
    console.log(computerGuess[0]);
}

   // Key presses
document.onkeypress = function(event) {
    var userGuess = event.key;
    lettersGuessed.push(userGuess);
    console.log(computerGuess[0]);

    if ((userGuess === computerGuess[0]) && (guesses > 0)) {
        wins++;
        guesses = 10;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        computerChoice.push(compGuess);
        console.log(computerChoice[0]);
    }
    
    else if ((userGuess !== computerGuess[0]) && (guesses > 0)) {
        guesses = guesses-1;
    }
    
    else {
        losses++;
        guesses = 10;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        computerGuess.push(compGuess);
        console.log(computerChoice[0]);
    }
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    document.getElementById('lettersGuessed').innerHTML = "Letters guessed: " + lettersGuessed;
}