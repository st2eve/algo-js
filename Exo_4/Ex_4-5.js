/*
Create a function named calcDistance which takes the coordinates of two different points A 
and B in a 2D space. That function must return the distance between those two points.

Examples results:

    Point A = [1, 1], point B = [2, 2] => 1.41
    Point A = [1, 1], point B = [3, 1] => 2
    Point A = [4, 1], point B = [1, 1] => 3
    Point A = [-2, 2], point B = [2, -2] => 5.65

Create a program to use that function.

Write a documentation for the calcDistance function.

Note: You probably need to make some search on Google to learn the mathematical formula to do 
that. You will also probably need to search for useful functions in JavaScript to help you 
making complex mathematical formulas...
*/

const pA = [-2, 2];
const pB = [2, -2];

/* on calcule la coordonnée X et Y pour ensuite récupéré la racine carrée du nombre pour 
connaitre la distance */
function calcDistance(){

    let y = pB[0] - pA[0];
    let x = pB[1] - pA[1];

    console.log(Math.sqrt(x * x + y * y));

}

calcDistance();