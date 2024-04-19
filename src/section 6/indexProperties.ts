//? Index properties.
//* The index properties acts as a placeholder for the property name in the type definition  of an object. 
//* The syntax [prop:type]: type is used to define index properties.
//* We can add multiple properties with the same syntax by defining a single index property in the object definition.


/* type Schools = {
    [prop: string]: string | number // Index property
} */

interface Schools {
    [prop: string]: string | number// Index property
}

const schoolList = {
    'st. johns': "A new school",
    'govt. school': "A high value school"
}