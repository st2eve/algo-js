const readlineSync = require("readline-sync");

let userFirstName = readlineSync.question('Can you give me your first name please?');
let userName = readlineSync.question('Can you give me your name please?');
let userCity = readlineSync.question('Can you tell me where you live please?');

console.log(`Your name is ${userFirstName} ${userName} and you live in ${userCity}.`);