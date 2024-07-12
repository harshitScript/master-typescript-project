//? Generics.
//* Generics always starts with Capital letter.
//* Generics are typescript specific feature not vailable in javascript.
//* Generics in typescript is a type that is connected to another datatype. 
//* Generics priovide typescript additional information about the incoming data and the operations on them.
//* Array and Promise are some of the generic types available in typescript.

//const users = ['max', 'micky'] // string[];
const users: Array<string> = ['max', 'micky']; //? The above line converted to generic notation.


const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('result done.')
        } else {
            reject('result pending');
        }
    }, 2000)
})

promise.then((data) => {
    data.split(' ')
})