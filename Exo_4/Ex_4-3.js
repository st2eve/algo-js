/*
By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) 
that returns an array of n numbers between 1 and 10. You should not modify anything in 
rand10() to achieve this.

Write a documentation for the multiRand(n) function.

Use that function to create a program that will ask the number of random numbers to generate 
then display that same number of random numbers.
*/

const readlineSync = require("readline-sync");

let userNumber = readlineSync.question('Can you tell me a number please?');
let arr = [];

/* génère un nombre aléatoire */
function rand10(max){
    return Math.floor(Math.random() * max); 
}

/* tant que le nombre d'élément dans le tableau est plus petit 5, il génère et stock un nombre
supplémentaire*/
function multiRand(n){
    while(arr.length < userNumber){                  
        arr.push(rand10(11));               
    }                                       
}

multiRand();
console.log(arr);