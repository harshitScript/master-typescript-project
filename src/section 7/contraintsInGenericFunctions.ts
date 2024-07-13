//? Constraints in generic function.
//* we can use the extends keyword to tell typescript that the generic type should accepts a particular type.

//* Without contraints (can accept any type as argument, but silenty fails.)
function combineObject<T, U>(obj1: T, obj2: U) {
    return { ...obj1, ...obj2 }
}
console.log('The generic without constarints => ', combineObject({ name: 'Harshit' }, 30))  // output {name: 'Harshit'}

//* With Constraints (argumnets should be an object not matter what structure they have)
function mergeObject<T extends object, U extends object>(obj1: T, obj2: U) {
    return { ...obj1, ...obj2 }
}
console.log('The generic with constarints => ', mergeObject({ name: 'Harshit' }, { age: 24 })) // output {name: 'Harshit', age : 24}

//* The "keyof" constaint in generic
// It defines that the passed value must be the key of the object.

function extractTheValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}
//! extractTheValue({}, 'name') Error (key is not present in object.)
extractTheValue({ name: 'Harshit' }, 'name')
extractTheValue(['Harshit'], 0) //? behind the scenes array is also an object in js.