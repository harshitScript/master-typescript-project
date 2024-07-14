//? Multiple Decorators
//* In case of multiple decorators the decorators execution occurres from bottom's up.
//* The decorator that is at the bottom will execute first.
//* The decorator factory will executes in the given order, but the decorators inside them will executes in bottom's up manner.

function Logger(identifier: string) {
    console.log('Logger Factory');
    return function (_: Function) {
        console.log(identifier);
    }
}

function User(identifier: string) {
    console.log('User Factory')
    return function (_: Function) {
        console.log(identifier);
    }

}

@Logger('Logger decorator')
@User('User Decorator')
class Student {
    name = 'Harshit';
    constructor() { console.log('Creating a student object...') }
}
const harshit = new Student();