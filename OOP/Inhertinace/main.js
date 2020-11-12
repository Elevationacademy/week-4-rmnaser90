class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}

class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }
    addCourse(course) { // overriding the inherted mehod
        if (this.courses.indexOf(course) == -1) {
            super.addCourse(course)
        }
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}

class Teacher extends Person {
    constructor(name, startYear, salary) {
        super(null, startYear)
        this.salary = salary
        this.name = "Professor " + name
    }
    addCourse(course) { // overriding the inherted mehod
        if (this.courses.find(c => c.course == course)) {
            this.courses.find(c => c.course == course).count++
        } else {
            const courseObj = { course, count: 1 }
            super.addCourse(courseObj)
        }
    }

    giveGrade(student, courseName, grade) {
        student.receiveGrade(courseName, grade)
    }
}

class Principal extends Person {
    constructor(name, startYear) {
        super(null, startYear)
        this.name = "Principal " + name
        this.teachers = []
        this.students = []
    }
    hireTeacher(teacher) {
        this.teachers.push(teacher)
        console.log(`${this.name} hired ${teacher.name}`);
    }
    recruitStudent(student) {
        this.students.push(student)
    }
    expelStudent(student) {
        const index =this.students.indexOf(student)
        if (index!=-1) {
            this.students.splice(index, 1)
        }
    }
    transferStudent(student, principal) {
        this.expelStudent(student)
        principal.recruitStudent(student)
    }
}

const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)

const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)
const s3 = new Student("sameer", 2016)
//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron
















// const s1 = new Student("Ronda", 2017)
// const t1 = new Teacher("Cassandra", 2002, 40000)

// console.log(t1.name); // to check modifiying inherted attribute

// t1.giveGrade(s1, "Algebra II", 82)
// const firstGrade = s1.grades[0]

// console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
// //above should print "Ronda received an 82 in Algebra II"


// //Instance of: is it an instance of a class? or a super class
// // the fact that one class could extend from more than one class is called Plymorphism
// console.log(t1 instanceof Teacher);
// console.log(t1 instanceof Person);
// console.log(t1 instanceof Student);
