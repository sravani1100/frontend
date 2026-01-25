function add(a, b){
    return a + b;
}

async function calculate(){
    let sum = await add(5 , 6);
    console.log("Sum :", sum);
}

calculate();