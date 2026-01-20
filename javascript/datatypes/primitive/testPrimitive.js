class TestPrimitive{

    constructor(value){
        this.value = value;
    }    

    age = 32;

    isPrimitive(){
        
        let name = "Sravani";
        let num = 121;
        var valid = true;
        var age = this.age;
        let a = age;
        age = this.value;

        console.log(name, num, age, a); //Sravani 121 Radha 32
        console.log("value : "+typeof this.value); //number

    }
}

const obj = new TestPrimitive("Radha");
obj.isPrimitive();