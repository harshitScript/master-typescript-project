//? The get (getter) and set (setter) methods in classes.
//* The getter and setter properties can only be accessed on the class instance.
//* These are the methods that can be accessed as properties in the classes.

class School {
    get schoolName() {
        return this.name;
    }

    set schoolRevenue(revenue: string) {
        this.revenue = revenue;
    }

    constructor(public name: string, public phone: number, private revenue: string) { };

    getSchoolRevenue() {
        return this.revenue;
    }
}

const subhash = new School('Subhash English School', 242401, '3 lac');

console.log('The school name => ', subhash.schoolName);

subhash.schoolRevenue = '10 lac';

console.log('The school revenue => ', subhash.getSchoolRevenue());