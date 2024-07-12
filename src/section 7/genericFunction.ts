//? Generic fucntion
//* we write generic functions when we are not sure about the structure of data we are going to receive.
 

// Here T and U works as the Placeholder for whatever type of arguments going to receive.
function combineObject<T, U>(obj1: T, obj2: U) {
    return { ...obj1, ...obj2 }
}
const result = combineObject({ name: "Harshit" }, { age: 24 });
console.log(`The generic function result => `, result.name, result.age, result)