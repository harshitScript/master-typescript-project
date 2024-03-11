const myIntro = (name: string, age: number, verified: boolean) => {
    console.log(`I'm ${name}, i m ${age} years old, all my information is verified: ${verified}`);
}

const myName = 'Harshit Bhawsar';
const myAge = 23;
let isVerified = true;

myIntro(myName, myAge, isVerified);