//? Enum is a custom data type exist in typeScript.
//* It allows us to assign the human readable label to numbers and strings.
//* It automatically assigns the incremental values to its properties.
//* Indexing starts from 0 by default.
//* enum is an advanced object i.e. we can access value by label or can access label by value

enum Courses { Maths, English, History, Hindi, Physics }; // Maths: 0, English: 1, History: 2 .......
console.log('The enum Courses => ', Courses);

enum Debt { Kapil = 3000, Harshad = 200, Shivansh = 1000, Hardik = 'No Debt' };
console.log('The debt on Shivansh => ', Debt.Shivansh); //? accessing value through label
console.log('The debt of 100 is on => ', Debt[1000]); //? accessing label through value

enum Prize { First = 1, Second, Third } //? Custom increment i.e. First: 1, Second: 2, Third: 3
console.log(`The Prize =>`, Prize)
