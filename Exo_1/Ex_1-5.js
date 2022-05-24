const readlineSync = require("readline-sync");

let userNumberOne = readlineSync.question('Can you give me a number with decimal please?');
let userNumberTwo = readlineSync.question('Can you give me another one please?');

console.log(`we only keep the integer part of the first number, so if we multiply them, the result is : ${Math.trunc(userNumberOne)*userNumberTwo}`);