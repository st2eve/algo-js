/*
Create a function named rand10() that returns a random integer between 1 and 10. Create a 
program that will display the result of that function each time it is run.

Write a documentation for the rand10() function.

You will have to search on Google how to generate random numbers in JavaScript for this 
exercise.
*/

/* la fonction renvoie le plus grand nombre plus petit ou égal par rapport à son argument,
ici ce nombre est compris entre 0 et 1 et est multiplié par une valeur max non incluse 
donnée */
function rand10(max){
    return Math.floor(Math.random() * max);
}

console.log(rand10(11));