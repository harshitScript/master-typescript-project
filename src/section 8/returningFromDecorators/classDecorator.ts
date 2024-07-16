//? Returning for the decorator.
//* We can return a constructor function from the decorator.
//* Constructor functions only executes when the class is instantiated.
//* The returned constructor function can be used to replace or twerk the logic of existing constructor function.
//* The returend constructor fucntion can replace the Original Constructor function when the class is defined.  

function StudentDecorator() {
    console.log('Student Decorator Factory');
    return function <T extends { new(...args: any[]): {} }>(OriginalConstructor: T) {
        console.log('Twerking the logic to be executed in the original constructor function of class Student');
        return class extends OriginalConstructor {
            //? This constructor is going the replace the original constructor
            constructor(..._: any) {
                //? This code will execute when the class is instantiated.
                super(); //? using super to perserve original constructors functionality.
                console.log('The replaced constructor logic from Student Decorator.')
            }
        }
    }
}

@StudentDecorator()
class Student {
    name = 'Harshit'
    age = 24
    constructor() {
        console.log('I m the original constructor function.')
    }
}

const harshit = new Student();
console.log(`The name is ${harshit.name} of age ${harshit.age}`)