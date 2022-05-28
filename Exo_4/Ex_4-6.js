/*
Create a function factorial(a) that returns the factorial of a number.

That function must be recursive.
*/

function factorial(a) {

  if (a == 0){
      return 1;
    }

  return a * factorial(a - 1);
}
 
let num = 5;
console.log("Factorial of " + num + " is " + factorial(num));
