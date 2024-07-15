//? Property decorator 
//* Property decorator is similer to class decorator, but it executes when the property is defined in the class.
//* Property decorator are placed just before the property in our class.
//* property decorator recives two arguments first is target and second is the property name.
    //* in case of normal property instantiated object recieved as per the target.
    //* in case of static property the class constructor recieved as per the target.

function NameLogger(target: any, propertyName: string) {
    console.log('The NameLogger => ', target, propertyName)
}

function TypeLogger(target: any, propertyName: string) {
    console.log('The TypeLogger => ', target, propertyName)
}

class Student {
    @NameLogger //? recieve the instantiated object as target. 
    name = 'Harshit';
    age = 24;
    @TypeLogger
    static type = 'Human'; //? recieve the class constructor as target.
    constructor() { };
    printInfo() { console.log('student info => ', { name: this.name, age: this.age }) }
}
