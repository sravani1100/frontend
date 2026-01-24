function greet(name, callback){
    console.log("greet ", name);
    callback();
}

function bye(){
    console.log("bye");
}

greet("Sravani", bye);