const readlineSync = require("readline-sync");

let userFirstName = readlineSync.question('Can you give me your first name please?');

console.log('Hello ' + userFirstName);

