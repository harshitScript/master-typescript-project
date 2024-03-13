//! Type inference does not work in case of tuples.
const notATuple = [1, 'Harshit'];
notATuple[1] = 2;

//? TYpe assignment work in case of tuple.
let tuple: [number, string] = [1, 'Harshit'];
//! tuple[1] = 2;   ERROR !!!!!
//* tuple.push(4); Array.Prototype.push() is a Exception in tuple.

console.log(tuple);