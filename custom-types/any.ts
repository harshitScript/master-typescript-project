//? The any type.
//* It tells typeScript that the variable can hold any type of value.

let anyValue: any;
console.log('The anyValue => ', anyValue);
anyValue = 4;
console.log('The anyValue => ', anyValue);
anyValue = 'Harshit';
console.log('The anyValue => ', anyValue);
anyValue = [2, 3, 'Hello'];
console.log('The anyValue => ', anyValue);
anyValue = { a: 'nothing' }
console.log('The anyValue => ', anyValue);