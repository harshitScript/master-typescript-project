//? Retuning form the Method Decorator.
//* Similer to the accessor decorator we can return the object of type PropertyDescriptor.
//* The return object of type PropertyDescriptor will replace the existing descriptor for the method.

function AutoBind(_: any, __: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    return {
        configurable: true, enumerable: false, get() {
            const originalMethod = descriptor.value
            return originalMethod.bind(this)
        }
    }
}

class Greet {
    constructor(public message: string) { }
    @AutoBind
    getGreeting() {
        console.log(`${this.message}`)
    }
}
const newGreet = new Greet('Good Morning')

const greetButton = document.querySelector('#greet')! as HTMLButtonElement
greetButton.addEventListener('click', newGreet.getGreeting)
//greetButton.addEventListener('click', newGreet.getGreeting.bind(newGreet))  ONE WORK AROUND (Using bind)