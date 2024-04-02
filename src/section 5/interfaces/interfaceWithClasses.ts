//? Interface with the class
//* The implements keyword is used to implement interface with the class.
//* When interface is used with the class, the class has to adhere the structure of interface for its instance. 

interface Animal {
    name: string;
    type: string;
    intro(): void
}

class WildAnimal implements Animal {
    constructor(public name: string, public type: string) { }
    intro() {
        console.log(`The animal name is ${this.name} having the ${this.type} type.`)
    }
}

const lion = new WildAnimal('Lion', 'Carnivorous');
lion.intro();