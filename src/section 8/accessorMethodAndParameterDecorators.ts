//? Accesor and Paramter decorators
//* Similar to class and property we can add decorators to accessors and parameters of a method also.



//? Accessor Decorator
//* Accessor decorator can be used with the accessor keywords like get and set.
//* Accessor decorator receives three arguments, target: prototype object, name: accessor name, descriptor: description of the accessor of type PropertyDescriptor.  
function AccessorDecorator(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('The Accessor Decorator =>', target, name, descriptor);
}

//? Method Decorator
//* Method decorators can be used with the static and normal methods of the class.
//* Method decorators receives three arguments, target: prototype object or constructor of class (in case of static method), name: name of method, descriptor: description of the method of type PropertyDescriptor. 
function methodDecorator(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('The Method Decorator =>', target, name, descriptor);
}

//? Parameter Decorator
//* Parameter descorators can be used with any parameter of the method.
//* Parameter decorators recieves three arguments, target: prototype object, name: parameter name, position: position of parameter in terms of index. 
function parameterDecorator(target: any, name: string, position: number) {
    console.log('The Method Decorator =>', target, name, position);
}
class Person {
    public name: string;
    public age: number;

    @AccessorDecorator
    get getPersonInfo() { return { name: this.name, age: this.age } }

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    @methodDecorator
    greet(@parameterDecorator message: string) {
        console.log(`${message} ${this.name}!`);
    }
}