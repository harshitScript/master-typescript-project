//? The unknown type.
//* any value can be assigned to unknown.
//* The unknown type is a special type that can hold anything but allows typeScript to implement a little type checking.
//* unknown type is better than any type cause it allows typeScript to implement a little type checking.

let x: unknown;
let y: string;
x = 2;
x = 'Harshit';

//! y = x (This will thrown non assignable error i.e. unknown type is not assignable to string.).

if (typeof x === 'string') { y = x } //? A strict type check is required to assign unknown values. 

console.log('The unknown variable contains =>', x);