//? Generic functions summary.

interface Lengthy {
    length: number
}
function countAndDescribe<T extends Lengthy>(element: T): [T, number] {
    return [element, element.length]
}
const elementAsString = countAndDescribe('Harshit'); //? String have a length property
const elementAsArray = countAndDescribe(['Harshit', 'Bhawsar']) //? Array have a length property 

function elementAndType<T>(element: T): [T, string] {
    return [element, typeof element]
}
const result = elementAndType('Harshit');
const result2 = elementAndType(2);