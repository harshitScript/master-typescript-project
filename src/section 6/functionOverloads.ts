//? Function overloads
//* It is term used to define that how many ways a function can be called.
//* Function overloads works as the meta data provide about how the function can be used.
//* It is used to specify the type of value a function will return if it get some specific type of arguments.

type Alphanumeric = string | number

function add(arg1: number, arg2: number): number //? Tells typescript if both arguments are number it will return number.
function add(arg1: string, arg2: string): string //? Tells typescript if both arguments are string it will return string.
function add(arg1: Alphanumeric, arg2: Alphanumeric) {
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1.toString() + arg2.toString()
    }
    return +arg1 + +arg2
}

// const result = add('Harshit', 'Bhawsar') as string; //? one solution (type casting)
const result = add('Harshit', 'Bhawsar')
result.toLowerCase() 