//? Type inference
const stringArray = ['Harshit', 'Bhawsar']; // string[]
const numberArray = [1, 2]; // number[]
const objectArray = [{ name: 'Harshit' }, { name: 'Shivansh' }]; // { name:string; }[]
const arrayOfarray = [[1, 2], [3, 4]];// number[][]
const mixedArray = [1, 'Harshit', { name: 'Harshit' }]; // any[]

//? Type assignment
let arr: string[];
arr = ['Harshit', "Bhawsar"]
console.log(`My name is ${arr[0]} ${arr[1]}.`)