//? Built-in generics:

//* Array<datatype>
const arr: Array<string> = ['Harshit', 'Bhawsar']

//* Promise<datatype>
const promise: Promise<number> = new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000);
})
promise.then(data => {
    console.log(data + 1);
})

//* Partial<object-datatype>
interface Info {
    name: string,
    age: number
}
function createInfo(name: string, age: number): Info {
    const result: Partial<Info> = {};
    result.name = name;
    result.age = age;
    return <Info>result;
}

//*  Readonly<datatype>
const readonlyObj: Readonly<{ name: string }> = { name: 'Harshit' };
//! readonlyObj.name = 'Shivansh' NOT ALLOWED

//? Creating Generics: , Class, Interface

//* Generic Functions
function greet<T>(user: T): string {
    return `Hello ${user}!`
}
greet<string>('Harshit'); greet<number>(7000);

//* Generic Class
class StudentsRegister<T> {
    private data: T[] = []
    add(element: T) { this.data.push(element) }
    print() { return this.data }
}

const nameStudentsRegister = new StudentsRegister<string>();
nameStudentsRegister.add('Harshit');
nameStudentsRegister.print();

const numericStudentsRegister = new StudentsRegister<number>();
numericStudentsRegister.add(7000);
numericStudentsRegister.print();

//* Generic Interface
interface Person<T> {
    identity: T
}
const idPerson: Person<number> = { identity: 900 };
const namePerson: Person<string> = { identity: 'Harshit' };

//? Generics Constraints: extends, keyof 

//* extends 
function describeArray<T extends string | number>(arr: T[]) {
    return `The length of array is ${arr.length}`
}
describeArray<string>(['Harshit', 'Bhawsar']);
describeArray<number>([1, 2]);

//* keyof
interface ValueObj {
    name: string,
    age?: number
}
function extactValue<T extends ValueObj, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}
extactValue({ name: "Harshit" }, 'name');
extactValue({ name: "Harshit", age: 24 }, 'age');
