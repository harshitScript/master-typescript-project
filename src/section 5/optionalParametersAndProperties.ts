//? Optional Parameters and Properties.
//* The ? is used tom define optional parameters and properties in classes and interfaces.

interface Animal {
    name: string,
    worth?: string // optional property
    getWorth?(worth: string): void;  //optional method
}

class Dog implements Animal {
    constructor(public name: string, public breed?: string) { }
    getWorth(worth: string): void {
        console.log(`The dog's worth is ${worth}`);
    }
}

const bully = new Dog('Cyber');
const americanPitbull = new Dog('Buddy', 'American Pitbull');

console.log('The instance bully and americanPitbull => ', bully, americanPitbull)