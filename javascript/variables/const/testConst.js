const user = {
    name : "Sravani"
};

user.name = "Gangireddy";
console.log(user.name); //Gangireddy

function test(){
    const name = "Ashwitha";
    console.log(name +" reddy"); //Ashwitha reddy
}

test.name = "Kethireddy";
console.log(test.name); //cannot re-assign

//console.log(a); //Cannot access 'a' before initialization(TDZ)
//const a = 12;

test();

