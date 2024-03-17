//? Classes short hand syntax!

class Sport {
    constructor(private name: string, public groundType: string, public playersCount: number) { }
    getName() {
        return this.name;
    }
}

const sport = new Sport('Football', 'Ground', 11);
console.log(`The sport name => ${sport.getName()}, The players count => ${sport.playersCount}`);