(function sum(a, b){
    console.log("sum ",a + b);
})(3, 2);


let counter = (function(){
    let count = 0;
    
    return function(){
        count++;
        console.log("Count ", count);
    };
})();
counter();