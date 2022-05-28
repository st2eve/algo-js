/*
Create a function named average(arr) that takes an array of numbers as argument and returns 
the average.

Create a function named min(arr) that takes an array of numbers as argument and returns the 
minimum element.

Create a function named max(arr) that takes an array of numbers as argument and returns the 
maximum element.

Create a program that asks a number to the user then generate that same amount of random 
numbers but also displays their average, min and max. To do so, use the three functions you 
just created as well as the multiRand(n) function created in Exercise 3.

Write a documentation for all the functions you created.
*/

const readlineSync = require("readline-sync");

let userNumber = readlineSync.question('Can you tell me a number please?');

let arrOne = [];
let sumOne = 0;

/* On appelle un nombre random qui est stocké dans un tableau, répéter autant de fois pas le 
nombre de l'utilisateur */
function rand10(max){
    return Math.floor(Math.random() * max); 
}
function multiRand(n){
    while(arrOne.length < userNumber){                  
        arrOne.push(rand10(21));               
    }                                       
}

/* On calcule la moyenne de tous les nombres du tableau */
function average(arr){
    for (let i = 0; i < arrOne.length; i++) {
        sumOne += Number(arrOne[i]);
     }
     let averageOne = sumOne/arrOne.length;
     console.log(averageOne);
}

/* On reprend le nombre le plus petit */
function min(arr){
    let minArr = Math.min(...arrOne);
    console.log(minArr);
}

/* On reprend le nombre le plus grand */
function max(arr){
    let maxArr = Math.max(...arrOne);
    console.log(maxArr);
}



multiRand();

console.log(arrOne);

average();

min();

max();