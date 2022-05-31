/*
Make a program that generates an integer between 1 and 100 (don't display it 
to the user).

Then the program should display "Guess the number" and ask the user to guess. 
If the user enters a number which is too low it should display "Too low" and 
re-ask the question. If the user enters a number which is too high it should 
display "Too high" and re-ask the question. If the user guess correctly it 
should display "Well guessed!" and exit.
*/
const readlineSync = require("readline-sync");

function randomNb(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

const number = randomNb(1, 100);

let userGuess = readlineSync.question('Guess the number between 1 to 100 :');

while(userGuess != number){

    if(userGuess < number){
        console.log("Too low !");
        userGuess = readlineSync.question('Guess the number between 1 to 100 :');
    }else if (userGuess > number){
        console.log("Too high !");
        userGuess = readlineSync.question('Guess the number between 1 to 100 :');
    }
}

if(userGuess == number){
    console.log("Well guessed !");
}


