
console.log(y); //undefined (var hoisting)
var y = 2;   


hoist(); //Function Hoisting

function hoist(){
    console.log("Function " +y); //Function 2
}


//console.log(a); //Cannot access 'a' before initialization
let a = "Ashwitha";
console.log(a);

//console.log(c); //Cannot access 'c' before initialization
const c = 45;
console.log(c);

//hoist1(); //ReferenceError: Cannot access 'hoist1' before initialization
const hoist1 = () => {
    console.log("Hoist1");
};

//hoist4(); //ReferenceError: Cannot access 'hoist4' before initialization
let hoist4 = () => {
    console.log("let hoist");
};

console.log(hoist2); //undefined
//hoist2(); // TypeError: hoist2 is not a function
var hoist2 = function(){ //JS treat it as a variable
    console.log("Hoist2");
}