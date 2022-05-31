/*
Make an interactive program to manager your favorite pizza flavors. 
When launched it must display a menu of this style:

Hello! Welcome to the Pizza Flavors Manager.

Please choose your actions:

1 - List all the pizza flavors
2 - Add a new pizza flavor
3 - Remove a pizza flavor
4 - Exit this program

Enter your action's number:

When the user enter the number of an action he will trigger the appropriate 
action:

List all the pizza flavors: Display the current list of pizza flavors. 
(There should be none if we just launched the program.)

Add a new pizza flavor: Ask the user for a new pizza flavor to add to the list.

Remove a pizza flavor: Ask the user for the number of the pizza flavor in the 
list he wants to remove.

Each time one of the action has been performed it should return to the menu. 
(Except of course if we select to exit the program.)

Bonus: Save the list of pizza flavors on the file system and reload it each 
time we launch the application.
*/
const readlineSync = require("readline-sync");
let flavorsChoosen = [];


const pizza = {

    sauces : ["tomate", "crème"],
    fromages : ["mozzarella", "gouda", "parmesan", "chèvre"],
    viandes : ["salami", "lardons", "chorizo", "merguez", "poulet"],
    legumes : ["oignons", "poivrons", "champignons", "tomates"]

}

function menu(){
    let menuDisplay = readlineSync.question(`
        Hello! Welcome to the Pizza Flavors Manager.
                                            
        Please choose your actions:
    
        1 - List all the pizza flavors
        2 - Add a new pizza flavor
        3 - Remove a pizza flavor
        4 - Exit this program
    
        Enter your action's number:`);

    if(menuDisplay == 1){
        console.log(pizza);
        menu();
    }else if (menuDisplay == 2){
        let addFlavor = readlineSync.question('Please, chose a flavor : ');
        flavorsChoosen.push(addFlavor);
        console.log(flavorsChoosen);
        menu();
    }else if (menuDisplay == 3){
        let removeFlavor = readlineSync.question('Please, chose a flavor to remove : ');
        flavorsChoosen.splice((flavorsChoosen.indexOf(removeFlavor)), 1);
        console.log(flavorsChoosen);
        menu();
    }else if(menuDisplay == 4){
        console.log('Have a nice day !');
    }
}

menu();
