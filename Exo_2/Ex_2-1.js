const readlineSync = require("readline-sync");

let userAge = readlineSync.question('Can you tell me your age please?');

if(userAge >= 18){
    console.log('You are an adult');
}
else{
    console.log('You are not yet an adult');
}