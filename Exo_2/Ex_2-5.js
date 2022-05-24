const readlineSync = require("readline-sync");

let userNumber = readlineSync.question('Can you tell me your favorite number please?');

while(userNumber != 42){
    userNumber = readlineSync.question('Can you tell me your favorite number please?');
}

console.log ('Yeaaaah that\'s my boy !')