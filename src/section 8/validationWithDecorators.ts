//? Valiadtion with Decorators

interface ValidatorConfig {
    [property: string]: {
        [validatableProperty: string]: string[]
    }
}

const registeredValidators: ValidatorConfig = {}

function RequiredDecorator(target: any, propertyName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propertyName]: ['required']
    }
}
function PositiveNumberDecorator(target: any, propertyName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propertyName]: ['positive']
    }
}
function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop]
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0
                    break;
            }
        }
    }
    return true;
}

class Person {
    @RequiredDecorator
    name: string;
    @PositiveNumberDecorator
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const personForm = <HTMLFormElement>document.querySelector('#person-form')!;
personForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = <HTMLInputElement>document.querySelector('#name-input')!
    const ageInput = <HTMLInputElement>document.querySelector('#age-input')!

    const person = new Person(nameInput.value, +ageInput.value);

    if (!validate(person)) {
        alert('Invalid Input, please try again.')
        return;
    }
    console.log("The person data => ", person);
})
