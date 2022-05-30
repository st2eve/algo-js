/*
You get an array of numbers, return the sum of all of the positives ones.

Example: [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0
*/

let arr = [1,-4,7,12];
let sum = 0;

for (let i = 0; i < arr.length; i++) {

    if(Number(arr[i]) > 0){
        sum += Number(arr[i]);
    }
}



 console.log(sum);

 /* Correction */

 let positive = arr.filter ( function (a) {return a >= 0})

 if(positive === 0){
     console.log(0)
 } else {
     sum = positive.reduce( function (a, b){return a + b})
     console.log(sum);
 }

/* Correction */
positive = arr.filter ( function (a) {return a >= 0}).reduce((a, b) => a + b, 0);
console.log(positive);