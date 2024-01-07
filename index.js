var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var school = /** @class */ (function () {
    function school(Name) {
        this.Teacher = [];
        this.students = [];
        this.Name = Name;
    }
    school.prototype.addstudents = function (stdobj) {
        this.students.push(stdobj);
    };
    school.prototype.addteacher = function (techobj) {
        this.Teacher.push(techobj);
    };
    return school;
}());
var student = /** @class */ (function () {
    function student(name, age, SName) {
        this.name = name;
        this.age = age;
        this.SchoolName = SName;
    }
    return student;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(student));
var school1 = new school("GGH");
var school2 = new school("GBHS");
var tech1 = new Teacher(" Sir Naeem", 22, school1.Name);
var tech2 = new Teacher("Sir Hussain", 32, school2.Name);
var std1 = new student("Hammad", 20, school1.Name);
var std2 = new student("Ahmed", 18, school2.Name);
var std3 = new student("faheem", 17, school2.Name);
// teachers 
school1.addteacher(tech1);
school2.addteacher(tech2);
// Students
school1.addstudents(std1);
school2.addstudents(std2);
school2.addstudents(std3);
// console.log(school1)
// console.log(school2)
console.log(school1);
console.log(school2);
