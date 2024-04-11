//? Discriminated Union
//* The discriminated union is an idea of defining a literal property, based of which objects can be discriminated.

interface Car {
    wheels: 4, //Discriminating property
    getCarName: (name: string) => void
}
const car: Car = {
    wheels: 4, 
    getCarName(name: string) {
        console.log(`The car name is => ${name} `)
    }
}

interface Bike {
    wheels: 2, //Discriminating property
    getBikeName: (name: string) => void
}
const bike: Bike = {
    wheels: 2,
    getBikeName(name: string) {
        console.log(`The bike name is => ${name} `)
    }
}

const printProperties = (obj: Car | Bike) => {
    if (obj.wheels == 2) obj.getBikeName('Bullet');
    if (obj.wheels === 4) obj.getCarName('Nexon')
}

printProperties(bike);
printProperties(car);