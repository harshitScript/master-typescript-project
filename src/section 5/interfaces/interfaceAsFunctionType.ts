//? Interfaces as function type
//* Interfaces can be used as a function type by defining a anonymous function in the interface.


// BEFORE: old function defination.
/* type GREET = (name: string, greeting: string) => string */

//AFTER: new function defination.
interface GREET {
    (name: string, greeting: string): string
}

let makeGreeting: GREET;

makeGreeting = (name:string, greeting:string) => `${greeting} ${name} !`

console.log(makeGreeting('Harshit', 'Good Morning'))