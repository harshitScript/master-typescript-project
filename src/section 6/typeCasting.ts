//? Type Casting in Typescript.
//* Type casting in typescript is used to tell typescript the type of element.
//* The as keyword is used for type casting in typescript.

// const inputElement = document.querySelector('#my-input');  // [Type will be of Element | null];
// const inputElement = document.querySelector('#my-input')!; // [Type will be of Element] (Not null operator ! is used)
// const inputElement = document.querySelector('#my-input')! as HTMLInputElement; // [Type will be of HTMLInputElement] (Not null operator ! is used)
const inputElement = <HTMLInputElement>document.querySelector('#my-input')!;
inputElement.placeholder = 'Enter your name'; 