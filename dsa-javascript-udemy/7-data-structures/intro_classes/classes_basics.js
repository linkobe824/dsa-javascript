class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    //instance methods
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
   
    markLate(){
        this.tardies++;
        if (this.tardies > 2) {
            return "You are expelled";
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`
    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    calculateAverage(){
        let sum = this.scores.reduce((a,b) => a + b);
        return sum/this.scores.length
    }

    // Class method (static method)
    static enrollStudents(){
        return "enrolling students...";
    }
}

let firstStudent = new Student("Manuel", "Beltran", 3)

//dot notation
//firstStudent.firstName -> Manuel

firstStudent.addScore(5);
firstStudent.addScore(7);
console.log(firstStudent.scores)
console.log(firstStudent.calculateAverage())

