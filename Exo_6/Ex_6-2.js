/*
Create a Person class. It will have two properties, firstname and lastname, 
and method sayHello, which will return "Hello, [firstname] [lastname]!".

Test the class: Create an instance of the Person class and return the value 
of the sayHello method inside the console.
*/

class person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    sayHello(){
        console.log(`Hello, ${this.firstname} ${this.lastname}`);
    }
}

new person("Steeve", "Houbart").sayHello();