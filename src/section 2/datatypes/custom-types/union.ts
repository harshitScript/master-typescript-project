//? The union data type.
//* The unions in typeScript allows us to use the combination of different data types.
const combine = (input1: number | string, input2: number | string) => {
    if (typeof input1 === "number" && typeof input2 === "number") return input1 + input2
    return input1.toString() + input2.toString();
};

console.log(`The result of number combine operation => ${combine(20, 30)}`);
console.log(`The result of string combine operation => ${combine('Harshit', 'Bhawsar')}`);

let age: number | string;
age = 4
console.log(`The numeric age => ${age}`);
age = 'Four'
console.log(`The string age => ${age}`);