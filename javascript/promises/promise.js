let promise = new Promise((resolve, reject) => {
    let success = false;

    if(success){
        resolve("Promise fulfilled successfully");
    }else{
        reject("Promise failed");
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });