//? The literal data type;
//* this data type indicates that a variable can hold only a particular value or a set of values by combining it with union.


let oddNumbers: 1 | 3 | 4 | 5; // literal in combination with union
oddNumbers = 3;
console.log('literal in combination with union => ', oddNumbers); // Outputs

let myName: 'Harshit Bhawsar'; // literal without union.
myName = 'Harshit Bhawsar';
console.log('literal without combination with union => ', myName); // Outputs