const readlineSync = require("readline-sync");

let n = readlineSync.question('Can you tell me a number please?');
const newNum = [];
let sum = 0;



while(newNum.length != n){

    let nBis = readlineSync.question('Can you tell me a number again please?');
    newNum.push(nBis);
}

for (let i = 0; i < newNum.length; i++) {
    sum += Number(newNum[i]);
}

console.log(sum+Number(n));