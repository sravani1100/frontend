function x(){
    let a = 1;

    function y(){ // y holds a reference to 'a'
        console.log("y : a = ", a);
    }
    a = 3;
    console.log("x : a = ", a);
    y();
}
x();
