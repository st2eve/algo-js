const readlineSync = require("readline-sync");

let userNumber = readlineSync.question('Can you tell me a number between 1 and 7 please?');

var day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

console.log('Your number corresponds to this day in the week: ' + day[userNumber-1]);