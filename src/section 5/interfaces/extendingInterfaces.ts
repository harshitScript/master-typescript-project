//? Extending interfaces
//* Unlike classes interfaces can  extends multiple interfaces.
//* One class can implements multiple interfaces and adhere to them at once.
interface Student {
    name: string;
    age: number;
    getStudentInfo(): void
}

interface Sports {
    sportName: string,
}

interface Teacher {
    name: string;
    age: number;
    getTeacherInfo(): void
}


//? Interface extending multiple interfaces at once.
interface Standard extends Student, Teacher {
    standard: string;
}

let sunil: Standard = {
    name: "Sunil",
    age: 34,
    standard:'10th',
    getStudentInfo() {

    },
    getTeacherInfo() {

    }
} 

//? Class implementing multiple interfaces at once.
class Person implements Student, Sports {
    constructor(public name:string, public age:number, public sportName:string ){}
    getStudentInfo(): void {
        
    }
}