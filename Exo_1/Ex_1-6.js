const readlineSync = require("readline-sync");

let userNumberOne = readlineSync.question('Can you give me a number please?');
let userNumberTwo = readlineSync.question('Can you give me another one please?');


console.log(`we display the rest of the integer division of the two numbers, the result is : ${Math.trunc(userNumberOne/userNumberTwo)}`);