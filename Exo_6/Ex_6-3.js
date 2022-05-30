/*
In the code below, there is a prewritten class named: Animal.

From this class, create the two classes, Cat and Dog. They will each have 
two properties, name and greeting (the second property must be static).

    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

Test the class: Create an instance of the Dog class and an instance of 
the Cat class and display the return value of the sayHello method inside 
the console.
*/

class Animal {
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}

class Cat extends Animal{
    constructor(name, greeting){
        super(name, greeting);
        this.name = name;
        this.constructor.greeting = greeting;
    }
}
class Dog extends Animal{
    constructor(name, greeting){
        super(name, greeting);
        this.name = name;
        this.constructor.greeting = greeting;
    }
}

let pixel = new Cat("Pixel", "Hello to you random citizen ").sayHello();
let brutus = new Dog("Brutus", "Hello to you random citizen ").sayHello();

console.log(pixel);
console.log(brutus);





