class school {
    Name: string
    Teacher: Teacher[] = []
    students: student[] = []


    addstudents(stdobj: student) {
        this.students.push(stdobj)
    }

    addteacher(techobj: Teacher) {
        this.Teacher.push(techobj)
    }
    constructor(Name: string) {
        this.Name = Name;
    }

}
class student {
    name: string
    age: number
    SchoolName: string
    constructor(name: string, age: number, SName: string) {
        this.name = name
        this.age = age
        this.SchoolName = SName
    }
}
class Teacher extends student { }

let school1 = new school("GGH");
let school2 = new school("GBHS");
let tech1 = new Teacher(" Sir Naeem", 22, school1.Name)
let tech2 = new Teacher("Sir Hussain", 32, school2.Name)
let std1 = new student("Hammad", 20, school1.Name)
let std2 = new student("Ahmed", 18, school2.Name)
let std3 = new student("faheem", 17, school2.Name)
// teachers 
school1.addteacher(tech1)
school2.addteacher(tech2)

// Students
school1.addstudents(std1)
school2.addstudents(std2)
school2.addstudents(std3)

// console.log(school1)
// console.log(school2)
console.log(school1)
console.log(school2)
