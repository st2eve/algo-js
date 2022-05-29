/*
Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. The data structure must be elegant.

Create a program that use that function to generate a TV serie object and display it to the user in JSON format.
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
}

askTvSerie();




