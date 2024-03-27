//? Static methods and properties.
//* these properties can be accessed directly on the class.

class Operations {
    static PI = 3.14; //? Defining a static property.
    static addNumber(input1: number, input2: number) {
        return input1 + input2
    }
}

console.log('The value of PI => ', Operations.PI);
console.log('The addition => ', Operations.addNumber(3, 4))