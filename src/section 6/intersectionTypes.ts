//? Intersection types (&)
//* The intersection type is made by combining two or more types definition.
//* The intersection type is defined by using the `&` symbol between the types.
//* The intersection type is opposite of the union type.
//* The intersection of the Object type can be achieved by extending the interfaces.

type Game = {
    players: number
}
type Sport = {
    field: string
}
type Outdoor = Game & Sport
let Cricket: Outdoor = {
    players: 11,
    field: 'pitch'
}

type AlphaNumeric = string | number
type NumBool = number | boolean

//? union : all the unique values.
type UnionType =  AlphaNumeric | NumBool; // string |number|boolean

//? intersection: all the common values.
type IntersectionType = AlphaNumeric & NumBool; // number