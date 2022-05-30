/*
Write a program that will calculate the average value of a given array.

Test it with the following arrays:

    [1, 2, 3, 4, 5] => 3
    [100, 101, 102] => 101
*/


let arrOne = [1, 2, 3, 4, 5];
let arrTwo = [100, 101, 102];
let sumOne = 0;
let sumTwo = 0;


for (let i = 0; i < arrOne.length; i++) {
   sumOne += Number(arrOne[i]);
}

let averageOne = sumOne/arrOne.length;

console.log(averageOne);

for (let i = 0; i < arrTwo.length; i++) {
    sumTwo += Number(arrTwo[i]);
 }
 
 let averageTwo = sumTwo/arrTwo.length;
 
 console.log(averageTwo);

 /* correction */

 let sumC = arrOne.reduce((a, b) => a + b, 0);
 sumC = sumC / arrOne.length;

 console.log(sumC);