//? Decorator Factory.
//* Normal declaration of decorator does not accepts arguments.
//* Decorator factory is just a approach of warpping our decorator inside another function.
//* The advantage of decorator factory is that now we can pass our own agrmnets to be utilized in the decorator.

function LoggerDecorator(customMessage: string) {
    return function (constructor: Function) {
        console.log(customMessage);
        console.log(constructor);
    }
}
@LoggerDecorator('Firing off the decorator') //? Decorator factory
class Student {
    name = 'Harshit'
    age = 24
    constructor() { console.log(`Creating an student instance.`) }
};