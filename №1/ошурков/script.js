class Students {
    constructor(firstName, lastName, age, avergeGrade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.avergGrade = avergGrade;
    }

    getInfo() {
        return  ${HTMLDListElement.firstName}, ${this.lastName}, ${this.age}, ср.оценка ${this.avergGrade.toFixed(2)} ' ;
    }
}

const student1 = new Student("Ваня", "Стукалов", 23, 5.0);
const student2 = new Student ("Стас", "Нилов", 21, 4.2);
const student3 = new Student ("Игорь", "Анисин", 24, 3.7);

const students = [student1, student2, student3];

const studentsDiv = document.getElementById('students');
students.forEach(student => {
    const studentInfo = document.createElement('p');
    studentInfo.textContent = student.getInfo();
studentsDiv.appendChild(studentInfo);
})