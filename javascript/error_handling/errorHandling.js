try{
    let result = 10 / 0;
    console.log(result);

    let x = y + 5;
}catch(error){
    console.log("Error :", error.message);
}finally{
    console.log("Finally block");
}