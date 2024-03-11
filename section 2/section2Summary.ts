console.log('The section 2 summary !');

//? Type inference
const myName = 'Harshit BHawsar';  //* automatic type detection as 'string'.

//? Type assignment
let myAge: number;
myAge = 23;

let myHobbies: string[];
myHobbies = ['Cricket', 'Coding', 'Riding'];

let myAddress: {
    'lane-number': number;
    'area': string;
    'city': string;
    'landmarks': string[]
};
myAddress = {
    'lane-number': 2,
    area: 'Mandsaur',
    city: 'Mandsaur',
    landmarks: ['Sanjayn Gandhi udhayan', 'Paliwal']
}

//? functions 
function greetWithName(name: string): void {
    console.log(`Hello! ${name}`);
}
greetWithName(myName);

//? function type
let doAnything: Function; // any type of function can be assigned to it.
doAnything = greetWithName;
doAnything = () => { }

let doAsTold: (message: string) => void
//doAsTold = doAnything; Error!
doAsTold = greetWithName;


//? Type aliases
type AlphaNumeric = number | string

let configurationObject: {
    name: string,
    age: AlphaNumeric,
    phone: AlphaNumeric,
    infoAbout: 'self' | 'other',
    city: string,
    greet: (name: string) => void,
}

configurationObject = {
    name: myName,
    age: myAge,
    infoAbout: 'self',
    city: myAddress['city'],
    greet: greetWithName,
    phone: 7974792317
}


//? Callbacks
function fullIntro(name: string, age: AlphaNumeric, greet: (name: string) => void): void {
    greet(name);
    console.log(`Your age is ${age}.`);
}

fullIntro(configurationObject['name'], configurationObject['age'], greetWithName)


//? any and unknown type;
let a: any;
let b: string;
a = 2;
a = 'two';
b = a;

let x: unknown;
let y: string;
x = 3;
x = 'three';
//y = x; {Error}
if (typeof x === 'string') y = x; // With strict type checking unknown variable can be assigned.