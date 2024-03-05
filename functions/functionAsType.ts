//? Function as a type.
//* We can also use the Function keyword to tell typescript that this variable will hold a function.


function test(name: string) {
    console.log(name);
}

function testExt(): number {
    return 3
}

//* Now the variable testFunction can be assigned any type of function.
let testFunction: Function;
testFunction = test;
testFunction = testExt;

//* Here the variable testFunctionExt can only be assigned a function that takes nothing as argument and return a number.
let testFunctionExt: () => number;
//! testFunctionExt = test; Error: type not matched 
testFunctionExt = testExt // Assigned successfully.