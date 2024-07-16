//? Returning form accessor decorator.
//* We can return the Object of type PropertyDescriptor from Accessor Decorator.

function AccessorDecorator(target: any, propertyName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log("The property descriptor => ", descriptor)
    return { ...descriptor, configurable: false } //? This will chnage its property descriptor.
}
class Person {
    name = 'Harshit';

    @AccessorDecorator
    get getName() { 
        return this.name 
    }
    
    constructor() { };
}