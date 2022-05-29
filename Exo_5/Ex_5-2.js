/*
Create a function named randomizeCast(tvSerie) that will take as argument the 
data structure you defined in the previous exercise and return a list of the same 
cast but in a random order.

Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask 
the user about a TV serie then display a randomized list of the previous cast 
that will form the new cast of your next serie.
*/

const readlineSync = require("readline-sync");


function askTvSerie(){
    
    let serie = {

        Name: readlineSync.question('What\'s the name of your favorite serie ?'),
        Year: readlineSync.question('What\'s the production year of that serie ?'),
        Cast: []

    };

    let serieCastNb = readlineSync.question('how many actors were in it ?');

    for(let i = 0; i < serieCastNb; i++ ){

        let serieCast = readlineSync.question('What\'s their names ?');
        serie.Cast.push(serieCast);

    }
    console.log(serie);

    function randomizeCast(tvSerie){

        for(i = serie.Cast.length-1 ; i>0 ;i--){
            let j = Math.floor( Math.random() * (i + 1) ); //random index
            [serie.Cast[i],serie.Cast[j]]=[serie.Cast[j],serie.Cast[i]]; // swap
        }

        console.log(serie.Cast);
    }
    randomizeCast();
}

askTvSerie();
