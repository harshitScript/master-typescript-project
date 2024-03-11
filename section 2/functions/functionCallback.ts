//? Functions and Callback
//* we can define the type of callback we need.


//* here print is the callback.
const printName = (firstName: string, lastName: string, print: (result: string) => void): void => {
    const result = `${firstName} ${lastName}`;
    print(result);
}

printName('Harshit', 'Bhawsar', (result) => {
    console.log(result)
    return result //? even though the return type is void typescript doesn't give us an error, it is an exception.
})