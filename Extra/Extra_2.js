/*
Make a program that asks for an integer n and generates the n first Fibonacci numbers.

Yes, you'll have to search what the hell are Fibonacci numbers.
*/

const readlineSync = require("readline-sync");

let fibonacciNb = readlineSync.question('Tell me a number who\'ll be the first Fibonacci numbers :');
let n = [0, 1];

if(fibonacciNb > 100){
    console.log("Why so much ? What are you trying to do smart boy ? Get out !")
}else{
    for(let i = 2; n.length < fibonacciNb; i++){
        
        n.push((n[i - 1]) + (n[i - 2]));
    }
    console.log(...n);
}


