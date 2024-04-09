//? Interfaces summary.

//* Interfaces as a type

// Object Type (recommended)
interface GymRat {
    name: string;
    height: number,
    weight: number,
    getBMI: () => number
}
let ram: GymRat = {
    name: "Ram",
    height: 1.778,
    weight: 88,
    getBMI() {
        return this.weight / this.height
    }
}
console.log(`The BMI of ram is => ${ram.getBMI()}`)

// Function type
interface GymRatName {
    (name: string): string
}
let getGymRatName: GymRatName = (name: string) => {
    return `${name} is a gym-rat !`
}
console.log(getGymRatName('Harshit'))


//*  Extending interfaces
interface Player extends Sports, Price {
    name: string
}
interface Sports {
    sport: string;
}
interface Price {
    price: number
}

//* Implementing Interfaces with classes
interface Insect {
    type: string,
    name: string
}
class Bugs implements Insect {
    constructor(public type: string, public name: string) { }
}

//* Optional(?) Property, parameter, methods
interface Food {
    name: string,
    hot?: 'yes' | 'no'
}
class Meal implements Food {
    constructor(public name: string, public hot: 'yes' | "no" = 'yes') { }
}
const meal1 = new Meal('pasta');
console.log('The meal1 is =>', meal1)

