//? Generic classes.

//* our example
class PriceOfElement<T> {
    constructor(public name: string, public price: T) { }
}

const car = new PriceOfElement('Prius', 5000)
const bike = new PriceOfElement('Hayabusa', '18 lakhs');


//* Lecturer example
class DataStorage<T extends string | number | boolean> {
    private data: T[]
    constructor() {
        this.data = []
    }
    addData(element: T) { this.data.push(element) };
    removeData(element: T) { this.data = this.data.filter(el => el !== element) };
    printData() { console.log(this.data) }
}
const textStorage = new DataStorage<string>();
textStorage.addData('Harshit');
textStorage.addData('Kumar');
textStorage.addData('Bhawsar');
textStorage.removeData('Kumar');
textStorage.printData();

const numericStorage = new DataStorage<number>();
numericStorage.addData(50);
numericStorage.addData(34);
numericStorage.addData(10);
numericStorage.removeData(50);
numericStorage.printData();

const alphaNumericStorage = new DataStorage<number | string>();
alphaNumericStorage.addData(50);
alphaNumericStorage.addData('Harshit');
alphaNumericStorage.addData(10);
alphaNumericStorage.removeData(50);
alphaNumericStorage.printData();