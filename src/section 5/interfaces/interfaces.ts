//? Interfaces in typescript is defined by using the interface keyword.
//* An Interface is similar to the class but it only contains the type defination for the object.
//* An interface cannot have a initializer.
//* Interface defines the structure of the object.

interface Student {
    name: string;
    age: number;
    intro(): void
}

let john:Student;
john = {
    name:"John Cena",
    age:34,
    intro(){
        console.log(`Hello my name is ${this.name}, i m ${this.age} y/o.`);
    }
}

john.intro();