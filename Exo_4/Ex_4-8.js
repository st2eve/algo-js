/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a 
function to calculate the total time required for all the customers to check out!

input

    customers: an array of positive integers representing the queue. Each integer represents 
    a customer, and its value is the amount of time they require to check out.
    n: a positive integer, the number of checkout tills.

output

The function should return an integer, the total time required.

Examples:

queueTime([5,3,4], 1)
should return 12
because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
should return 10
because here n=2 and the 2nd, 3rd, and 4th people in the
queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
should return 12

Clarifications

    - There is only ONE queue serving many tills, and
    - The order of the queue NEVER changes, and
    - The front person in the queue (i.e. the first element in the array/list) proceeds to a 
      till as soon as it becomes free.
    - You should assume that all the test input will be valid, as specified above.
*/

const readlineSync = require("readline-sync");

let customerNb = parseInt(readlineSync.question('How many customer is there ?'));
let n = parseInt(readlineSync.question('How many tills is there ?'));
let customers = [];
let tillsNb = [];
let timeNeeded = 0;


/* Cette fonction demande autant de fois qu'il y a de clients le temps nécessaire pour chacun 
avant de passer à la caisse puis l'enregistre dans un tableau (customers) */
function customersArr(){
    while(customerNb > customers.length){
        let customerTime = parseInt(readlineSync.question('In order, how much time does each customer need before checking out ?'));
        customers.push(customerTime);
    }
}


/* Cette fonction crée un tableau (tillsNB) qui contient autant d'éléments débutant 
à 0 que de nombre de caisse */
function tillsArr(){
    while(tillsNb.length < n){
        tillsNb.push(0);
    }
}


/* 
-   Cette fonctione crée une boucle pour sélectionner chaque élément du tableau "customers".
-   Une nouvelle variable "tillMin" est créée pour additionner chaque élément de "customers" à la plus 
    petite valeur du tableau tillsNb. 
-   Une nouvelle variable "tillMinIndex" est créée pour connaitre l'indice de l'élément le plus petit 
    de "tillsNB".   
-   On supprime l'élément situé à l'indice sélectionner plus tôt pour le remplacer par la nouvelle valeur
    calculée plus tôt dans "tillMin"
-   Enfin, on sélectionne la valeur la plus haute du tableau "tillsNb" qui sera le temps nécessaire pour 
    tous les checkout.
*/
function totalTime(){
    for(let i = 0; i < customers.length; i++){
        let tillMin = Math.min(...tillsNb) + customers[i];
        let tillMinIndex = tillsNb.indexOf(Math.min(...tillsNb));
        tillsNb.splice(tillMinIndex, 1, tillMin);
        timeNeeded = Math.max(...tillsNb);
    }
    
}


customersArr();
tillsArr();
totalTime();

console.log(customers);
console.log(tillsNb);
console.log(timeNeeded);
