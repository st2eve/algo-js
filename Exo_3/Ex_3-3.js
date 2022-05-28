/*
Write a program that will create a duplicate of a given array.

Bonus: make a first version that will only do it using push(). Make a second version that 
uses a single method call to perform the copy.
*/

let arrOne = [1, 2, 3, 4, 5];
let arrTwo = [];

arrTwo.push(...arrOne);

console.log(arrTwo);

/* second method */

console.log(arrOne.copyWithin(arrTwo));