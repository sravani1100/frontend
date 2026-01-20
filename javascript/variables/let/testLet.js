function test(){
    let x = 50;
    console.log(x);
}

//console.log(x); // Error : x is not defined

if(true){
    let y = 80;
    console.log(y);
}
//console.log(y);// Error : y is not defined

for(let i = 0; i < 5; i++){
    console.log(i);
}

let user = {
    name: "Sravani",
    age : 23
};

user.name = "reddy";
user.age = 24;

console.log(user.name +" " +user.age); // reddy 24

test();