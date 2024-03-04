//? Type alias (type)
//* conventionally we use first capital letter.
//* It allows use to make a alias for complex type we are using.

type OddNumbers = 1 | 3 | 4 | 5;
type MyName = 'Harshit Bhawsar'
type Sports = {
    'football': string;
    'cricket': string;
}

let oddNumbers: OddNumbers;  // literal in combination with union
oddNumbers = 3;
console.log('literal in combination with union => ', oddNumbers); // Outputs

let myName: MyName; // literal without union.
myName = 'Harshit Bhawsar';
console.log('literal without combination with union => ', myName); // Outputs

let sports: Sports;
sports = { 'cricket': 'Kohli', 'football': 'Ronaldo' }