console.log('Class !');
class Students {
    studentName: string;
    studentAge: number;
    studentStandard: string;
    private studentSubject: string[]; //? can only be accessed from inside the function.

    constructor(name: string, age: number, standard: string) {
        this.studentName = name;
        this.studentAge = age;
        this.studentStandard = standard;
        this.studentSubject = [];
    }
    getName() {
        return this.studentName;
    }
    addSubject(subject: string) {
        this.studentSubject.push(subject);
    }
    getSubject() {
        return this.studentSubject;
    }
}

const student = new Students('Harshit Bhawsar', 23, 'Software Developer');
console.log(`student Name => ${student.studentName}`); //? accessible cause its a public property.
//! console.log(`student subjects => ${student.studentSubject}`) Error: private property to the class.
//! student.studentSubject = ['English'] Error: private property to the class.
student.addSubject('Maths'); //? accessible from  inside the class.
console.log(`student subjects => ${student.getSubject()}`); //? accessible from  inside the class. 

