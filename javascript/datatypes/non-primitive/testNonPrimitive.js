class TestNonPrimitive{


    isNonPrimitive(){
        let array = [1, 2, 3, 4];

        function test(){
            return "Non-Primitive";
        }

        let user = {
            name : "Sravani",
            age : 23,
            gender : "female"
        };

        console.log("Array : " +array +"\n"
                    +"User : " +user.name,user.age, user.gender +"\n"
                    +"test : " +test());  //Array : 1,2,3,4
                                          //User : Sravani 23 female
                                          //test : Non-Primitive
    }
}

let obj = new TestNonPrimitive();
obj.isNonPrimitive();