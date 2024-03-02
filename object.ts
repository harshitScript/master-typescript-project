//? This is the example of type inference
//*const mySelf = {
//*    name: 'Harshit Bhawsar',
//*    age:23,
//*} 

//? This is type assignment
//*const mySelf: object/{}= {
//*    name: 'Harshit Bhawsar',
//*    age:23,
//*}

//? This is typeScript type object 
const mySelf: {
    name: string;
    age: number;
    hobbies: string[];
    nickName: string;
    details: {
        phone: number;
        city: string;
    }
} = {
    name: "Harshit Bhawsar",
    age: 23,
    nickName: 'hash',
    hobbies: ['cricket', 'coding'],
    details: {
        phone: 7974792317,
        city: 'Bangalore'
    }
}

console.log(mySelf);