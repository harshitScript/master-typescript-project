console.log('Class !');
class Students {
    studentName: string; studentAge: number; studentStandard: string;
    constructor(name: string, age: number, standard: string) {
        this.studentName = name;
        this.studentAge = age;
        this.studentStandard = standard;
    }
    getName() {
        return this.studentName;
    }
}



const student = new Students('Harshit Bhawsar', 23, 'Software Developer');
console.log(student.getName());

//? The this keyword always refer to its parent object.
const studentCopy = { studentName: 'Harshit', getName: student.getName }
console.log(studentCopy.getName())