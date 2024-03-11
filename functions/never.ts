//? The never function return type.
//* When a function return nothing its return type will be void, but when a function crashes the script of never goes ahead its return type will be never.
//* The function will never go further in terms of code execution.

function doNothing(): void {}

function throwError(message: string, code: 500): never {
    throw { message, code };
}

console.log(`The doNothing function with return type void`, doNothing());
console.log(`The throwError function with return type never`, throwError('Hye', 500));