//? Functions return type.
//* We must depend on the type inference to do all the things until we have a complex return type.


//* Type inference already set its return type as string.
function makeName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`
}
console.log(makeName('Harshit', 'Bhawsar'));

//* Type inference already set its return type as string | number.
function test (input: string | number) {
    return input
}
console.log(test(12))

//* We can also explicitly define the return type like this.
function printName (name: string):void{
    console.log(`${name}`)
}

printName('Harshit Bhawsar')