//? Class Inheritance.

class School {
    constructor(public readonly name: string, public readonly address: string, public readonly phone: number) { }
}

class DPS extends School {
    constructor(public name: string, public standards: string[],) {
        super(name, 'Indore (M.P)', 9407541209);
    }
    getDetails(){
        console.log(`The ${this.name} is located at ${this.address} and contact number ${this.phone}, teaching for standards ${this.standards}`);
    }
}

const delhiPublicSchool = new DPS('Delhi Public School', ['1st', '2nd']);
delhiPublicSchool.getDetails();