async function demo(){
    console.log("Before await");

    let result = await 10; //JS treats this as Promise.resolve(10)

    console.log("After await");
    console.log("Result :", result); 
}

demo();