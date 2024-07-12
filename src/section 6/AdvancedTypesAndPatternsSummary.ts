//? Section 6 Summary (Advanced types and Patterns);

//* Intersection Types
type Car = {
    name: string;
}
type SUV = {
    modal: 'SUV';
}
type SUVCar = Car & SUV; // can also be possible with interface's "extends" operator.

const mahindra: SUVCar = {
    name: "XUV700",
    modal: 'SUV'
}
console.log(`[Intersection Types] of Car and SUV result => `, mahindra);

//* Type Guards
const maruti: Car = { name: '800' };
const bmw: SUV = { modal: 'SUV' };
const printCarProperty = (carObj: Car | SUV) => {
    if ('name' in carObj) return carObj.name //? type guard. similer to (carObj instanceOf Car)
    return carObj.modal
}
console.log(`[Type Guards] Car and Suv result =>`, printCarProperty(maruti), printCarProperty(bmw))

//* Discriminated Union
interface Harshit {
    name: 'Harshit'; //? Literal type for discrimination.
    age: number;
}
interface Mayank {
    name: 'Mayank'; //? Literal type for discrimination.
    age: number;
}
const boy1: Harshit = { name: 'Harshit', age: 24 };
const boy2: Mayank = { name: 'Mayank', age: 29 };
function printAges(boy: Harshit | Mayank) {
    if (boy.name === 'Harshit') return boy.age;
    return boy.age;
}
console.log(`[Discriminated Union] The age of Harshit and Mayank is =>`, printAges(boy1), printAges(boy2));

//* Type Casting
//const input = document.querySelector('#my-input')! as HTMLInputElement
const input = <HTMLInputElement>document.querySelector('#my-input')!
console.log(`[Type Casting] the value of input is =>`, input.value)

//* Indexed Properties
const fieldNames = ['name', 'standard', 'phone'];
interface ErrorObject {
    [key: string]: string
}
const errorObject: ErrorObject = {};
fieldNames.forEach(field => errorObject[field] = 'Required');
console.log(`[Indexed Properties] the errorObject is => `, errorObject);

//* Function Overloads
function add(arg1: string, arg2: string): string;
function add(arg1: number, arg2: number): number;
function add(arg1: string | number, arg2: string | number) {
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return `${arg1} ${arg2}`
    }
    return +arg1 + +arg2
}
//const confirmStringResponse = <string>add('Harshit', 'Bhawsar') // One solution(not recommended)
const confirmStringResponse = add('Harshit', 'Bhawsar')
const confirmNumberResponse = add(18, 6);
console.log(`[Function Overloads] the name and age is => `, confirmStringResponse, confirmNumberResponse);

//* Nullish coalescing
console.log(`The result of [null ?? 6] and [false ?? 8] is =>`, null ?? 6, false ?? 8)