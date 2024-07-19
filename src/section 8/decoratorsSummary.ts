//? Decorators summary

interface SchoolDecoratorRegister {
    [key: string]: string
}
const schoolDecoratorRegister: SchoolDecoratorRegister = {}

//*Normal Decorator
function ClassDecorator(OriginalConstructor: any) {
    schoolDecoratorRegister['ClassDecorator'] = OriginalConstructor.name
}

//* Decorator Factory.
function ClassDecoratorFactory(message: string) {
    console.log(message);
    return function (_: any) { }
}

//* Property Decorator
function PropertyDecorator(_: any, propertyName: string) {
    schoolDecoratorRegister['PropertyDecorator'] = propertyName
}

//* Accessor Decorator
function AccessorDecorator(_: any, propertyName: string, __: PropertyDescriptor) {

    schoolDecoratorRegister['AccessorDecorator'] = propertyName
}

//* Method Decorator
function MethodDecorator(_: any, methodName: string, __: PropertyDescriptor) {
    schoolDecoratorRegister['MethodDecorator'] = methodName
}

//* Parameter Decorator
function ParameterDecorator(_: any, methodName: string, __: number) {
    schoolDecoratorRegister['ParameterDecorator'] = methodName
}

@ClassDecorator
@ClassDecoratorFactory('Class Decorator Factory Executed')
class School {
    @PropertyDecorator
    name: string;
    contact: number;

    @AccessorDecorator
    get getSchoolInfo() {
        return { name: this.name, contact: this.contact }
    }

    constructor(name: string, contact: number) {
        this.name = name;
        this.contact = contact;
    }

    @MethodDecorator
    getSchoolDetails(@ParameterDecorator greet: string) {
        return `${greet} The contact number for ${this.name} is ${this.contact}`
    }
}
console.log('The Decorator Resgister for class School is => ', schoolDecoratorRegister);


//* Returning form Decorators: , Method type, Accessor type.

// Class Type.
function ClassDecoratorWithReturn<T extends { new(...args: any[]): {} }>(OriginalConstructor: T) {
    console.log(`[ClassDecoratorWithReturn] It will be executed when the class ${OriginalConstructor.name} is defined`)
    return class extends OriginalConstructor {
        constructor(...args: any[]) {
            super();
            console.log(`[ClassDecoratorWithReturn] This block will be executed when the class ${OriginalConstructor.name} is instantiated with arguments ${args}.`)
        }
    }
}

// Method Type : Example of AutoBind Decorator.
function MethodDecoratorWithReturn(target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log(`[MethodDecoratorWithReturn] It will be executed when the class ${target.constructor.name} is defined for the method ${methodName} with property descriptor ${descriptor}.`)
    return {
        configurable: true, enumerable: true, get() {
            const originalMethod = descriptor.value;
            return originalMethod.bind(this)
        }
    }
}

@ClassDecoratorWithReturn
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    @MethodDecoratorWithReturn //? auto not work with decorator class decorator with return
    greetThePerson() {
        console.log(`${this.name} ${this.age}y/o`)
    }
}

const harshit = new Person('Harshit', 24);

const greetButton = <HTMLButtonElement>document.querySelector('#greet')!;
greetButton.addEventListener('click', harshit.greetThePerson)