/*
Write a program that will add all the elements of an array.

Test it with the following arrays:

    [1, 2, 3, 4, 5] => 15
    [100, 101, 102] => 303
*/

let arrOne = [1, 2, 3, 4, 5];
let arrTwo = [100, 101, 102];
let sum = 0;


for (let i = 0; i < arrOne.length; i++) {
   sum += Number(arrOne[i]);
}

console.log(sum);

for (let i = 0; i < arrTwo.length; i++) {
    sum += Number(arrTwo[i]);
 }
 
 console.log(sum);


