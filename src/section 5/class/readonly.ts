class Sport {
    constructor(private name: string, public groundType: string, public playersCount: number, public readonly sportId: number) { }
    getName() {
        return this.name;
    }
}

const sport = new Sport('Football', 'Ground', 11, 45);
//! sport.sportId = 45 Error: Assignment to readonly property.
console.log(`The sport name => ${sport.getName()}, The sport id => ${sport.sportId}, The players count => ${sport.playersCount}`);