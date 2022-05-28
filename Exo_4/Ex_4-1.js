/*
Create a function named calcSurface that takes the length and width of a rectangle and 
returns its surface. Then create a program that asks the length and width of a rectangle to 
the user then displays the surface of that rectangle. That program must use the function you 
created.

Write a documentation for the calcSurface function.
*/
const readlineSync = require("readline-sync");

let recW = readlineSync.question('Can you tell me the width of your rectangle please?');
let recL = readlineSync.question('Can you tell me the length of your rectangle please?');

/* les réponses de l'utilisateur sont multipliées pour donner la surface et ça revoie 
directement la réponse dans la console */
function calcSurface(){
    
    console.log(`the surface of your rectangle is : ${recW * recL}`);
}

calcSurface();