//? Decorators
//* To enable the use of decorators in our project must enable the experimentalDecorators property in tsconfig.json.
//* Its a general convention to start the decorator name by capital letter.
//* The @ operator is used to use the decorator.
//* Decorator executed when the class is defined not when the class is executed. 
//* Decorator must be placed just above the class it is to be associated with.

function Logger(constructor: Function) {
    // Executes when the class is defined!
    console.log('logging...');
    console.log(constructor);
}
@Logger
class Student {
    name = 'Harshit';
    constructor() { console.log('Creating a student object...') }
}
const harshit = new Student();