//? TYPESCRIPT CLASSES SUMMARY.

//* Classes and Inheritance
class Bird {
    static specificFeature = 'They have wings.'
    constructor(public name: string, public type: string, protected edible: 'yes' | 'no',) { }
    static getSpecificFeature() {
        return this.specificFeature
    }
}
console.log('The Bird specific feature => ', Bird.getSpecificFeature())

class FlyingBirds extends Bird {
    get birdName() {
        return this.name
    }
    constructor(readonly name: string, private netWorth: string, edible: 'yes' | 'no') {
        super(name, 'flying', edible);
    }
    getNetWorth() {
        return this.netWorth
    }
}

const eagle = new FlyingBirds('Eagle', '1cr', 'no');
console.log(`The ${eagle.birdName} instance => `, eagle)

class WaterBirds extends Bird {
    get birdName() {
        return this.name
    }
    constructor(readonly name: string, private netWorth: string, edible: 'yes' | 'no') {
        super(name, 'water', edible);
    }
    getNetWorth() {
        return this.netWorth
    }
}

const duck = new WaterBirds('Duck', '10k', 'yes')
console.log(`The ${duck.birdName} instance => `, duck);

//* Abstract Classes
abstract class Dude {
    constructor(protected name: string) { }
    abstract getName(): string
}

class Old extends Dude {
    constructor(name: string) {
        super(name)
    }
    getName() {
        return this.name
    }
}

const ollie = new Old('Ollie wilson');
console.log('The old homie name => ', ollie.getName())