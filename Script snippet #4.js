class student {
    constructor(name,age,gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
getStudentInfo() {
       return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
}
olderThan(age) {
    if(age > this.age) {
        return `${age} is older than 20`;
    }
    else {
        return `${age} is not older than 20`;
    }
}
    
}
let studentData = new student("Daryll", 18, "Male");
alert(`Hello, My name is ${studentData.name}`);
alert(`My age is ${studentData.age} and I am ${studentData.gender}`);
alert(`My age of ${studentData.olderThan(18)}`);