function test(){
    var x = 10;
    console.log(x);
}
//console.log(x); //x is not defined error

if(true){
    var y = 20;
}
console.log(y);

for(var i = 0; i < 3; i++){
    console.log(i); 
}


console.log(a);// undefined, does not throw error
var a = 12;

test();