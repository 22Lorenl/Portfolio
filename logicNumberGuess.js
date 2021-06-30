//Variables
var computerGuess;
var userGuess;
var guesses = 0;
var winCounter = 0;
var lossCounter = 0;
var guessesUsed = [];
var feedback;
var stats = [];

//Logic
//reset function
reset();
function reset(){
    var computerGuess = Math.floor(Math.random()*100);
    var userGuess = 0;
    var guesses = 0;
    var guessesUsed = [];
    console.log(computerGuess);

    document.getElementById("yourGuess") = userGuess;
    document.getElementById("guessesRemaining") = guesses;
    document.getElementById("computerFeedback") = feedback;
    document.getElementById("statistics") = stats;
}