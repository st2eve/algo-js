/*
Make a program that asks for a positive integer. Then display all the 
divisors of that integer which are not 1 or itself.

Examples:

7 => nothing (it's a prime number)
10 => 2 5
9187 => nothing (it's a prime number too)
134234 => 2 41 82 1637 3274 67117
*/

const readlineSync = require("readline-sync");

let positiveInt = readlineSync.question('Tell me a number who\'ll be a positive integer :');

for (let n = 0; n < positiveInt; n++){
    
    if(positiveInt % n == 0 && n != 1){
        console.log(n);
    }
}