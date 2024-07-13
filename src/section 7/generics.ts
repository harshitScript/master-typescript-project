//? Generics.
//* Generics always starts with Capital letter.
//* Generics are typescript specific feature not vailable in javascript.
//* Generics in typescript is a type that is connected to another datatype. 
//* Generics priovide typescript additional information about the incoming data and the operations on them.
//* Array, Promise, Partial, Readonly are some of the generic types available in typescript.

//* Array<> generic type
// Gives as information about the type of data to be stored in an array. 
const users: Array<string> = ['max', 'micky']; //? The above line converted to generic notation.

//* Promsie<> generic type
// Gives un infomation about the type of data we are going to receive as promise completed. 
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

//* Partial<> generic type
// This generic type is used to make all the mandatory porperties of an object optional temporarily.
interface ExamResult { maths: number, english: number, science: number } //? all the properties are mandatory.
function makeExamResult(mathsScore: number, englishScore: number, scienceScore: number): ExamResult {
    let result: Partial<ExamResult> = {};
    result.maths = mathsScore;
    result.english = englishScore;
    result.science = scienceScore;
    return <ExamResult>result //? Type casting.
}

//* Readonly<> generic
// This generic type is used to to make a variable readonly.
const readonlyArray: Readonly<string[]> = ['Harshit', 'Bhawsar']
//! readonlyArray.push('hahaa') NOT ALLOWED
//! readonlyArray.pop() NOT ALLOWED