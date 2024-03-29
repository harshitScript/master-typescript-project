//? The abstract classes.
//* The abstract keyword is used to define abstract classes.
//* The abstract classes are used to enforce that all the inheriting/extending classes must have a certain method.
//* The abstract keyword is also used to provide the method declaration in the base class.

abstract class Player {
    get playerNethWorth() { return this.netWorth }
    constructor(public name: string, public age: number, protected netWorth: string, public sports: string) { }
    abstract getPlayerInfo(): string //? All the extending/inheriting class must have the getPlayerInfo method defined.
}

class SoccerPlayer extends Player {
    constructor(name: string, age: number, netWorth: string, public jerseyNumber: number, private status: 'active' | 'inactive') {
        super(name, age, netWorth, 'soccer')
    }
    getPlayerStatus() {
        return this.status
    }
    //* Abstract method defination enforced by the abstract parent class.
    getPlayerInfo() {
        return `The ${this.sports} player named ${this.name} aged ${this.age} has a net-worth of ${this.netWorth} wears the jersey number ${this.jerseyNumber} with a ${this.status} status.`
    }
}

const shelby = new SoccerPlayer('Thomas Shelby', 23, '1.2cr', 7, 'active');
console.log(shelby.getPlayerInfo());