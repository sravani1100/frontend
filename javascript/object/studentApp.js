import {Student} from "../object/student.js";

const student1 = new Student(
    1,
    "Sravani",
    [90, 91, 89, 90],
    true,
    "sravani@gmail.com",
    "9876543210"
);


const student2 = new Student(
    2, 
    "Ashwitha",
    [43, 23, 67, 73],
    true,
    "ashwitha@gmail.com",
    "9123456780"
);

const arr = [student1, student2];
console.log("Array : ", arr); 

const copy = {...arr};
console.log("Copy : ", JSON.stringify(copy, null, 2));

let newArray = arr.map(student => (student.id, student.name, student.getAverage()));
console.log("New Array : ",newArray);

let filterArray = arr.filter(student => student.getAverage() >= 50);
console.log("Students with average marks greater than or equal to 50 are : ",filterArray);

for(let student of arr){
    if(student.isActive){
        console.log("Name : "+student.name);
        console.log("Email : "+student ?. contact ?. email ?? "Email Not Available");
    }
}

const firstStudent = arr.find(student => student.getAverage() >= 90);
console.log("First Student whose average marks greater than 90 : ",firstStudent);

const failedStudent = arr.some(student => student.getAverage() < 40);
console.log("Failed Students : ",failedStudent);

console.log("IsActive : "+arr.every(student => student.isActive));

const exists = arr
                .map(student => student.name)
                .includes("Ashwitha");
console.log("Student name exists : " +exists);

const destruct = arr.map(student => 
                                {
                                    const{id, name, getAverage} = student;
                                    return `${id} - ${name} - ${student.getAverage().toFixed()}`;
                                });

console.log("Destructuring : "+destruct);