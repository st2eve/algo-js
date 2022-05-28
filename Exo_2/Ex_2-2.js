const readlineSync = require("readline-sync");

let userMinAge = readlineSync.question('First, can you tell me a minimum age for an entry to a bar please?');
let userMaxAge = readlineSync.question('Then, can you tell me a maximum age for an entry to a bar please?');
let userCurrentAge = readlineSync.question('Ok, and now, can you tell me your current age please?');

if(userMinAge > userMaxAge){
    console.log('I think you didn\'t understand the questions, it happens to everyone, no worries !');
}
else if(userMinAge < userCurrentAge < userMaxAge){
    console.log('You have the good age !');
}
else{
    console.log('You don\'t have the good age !');
}

