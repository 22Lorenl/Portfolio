//Variables
var computerGuess;
var userGuess;
var guesses = 0;
var winCounter = 0;
var lossCounter = 0;
var feedback;
var desire = true;
var tries = 0;
//Logic
userGuess = prompt("Enter a number 1-100");
computerGuess = Math.floor(Math.random()*100);
while(tries < 10){
    if(userGuess == computerGuess){
        winCounter++;
        desire = false;
        alert(userGuess+" is the right answer");
        tries = 11;
    }
    else if(userGuess != computerGuess){
        if(userGuess > computerGuess){
            userGuess = prompt("Lower than "+userGuess)
            alert(computerGuess);
            tries++;
        }
        else if(userGuess < computerGuess){
            userGuess = prompt("Higher than "+userGuess)
            tries++;
            alert(computerGuess);
        }
    }

}
