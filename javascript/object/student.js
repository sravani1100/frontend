export class Student{
    constructor(id, name, marks, isActive, email, phone){
        this.id = id;
        this.name = name;
        this.marks = marks;
        this.isActive = isActive;
        this.contact = {
            email,
            phone
        };
    }

    getAverage(){
        const sum = this.marks.reduce((number, total) => number + total, 0);
        const avg = sum / this.marks.length;
        return avg;
    }
}