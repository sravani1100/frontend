
function marks(arr){
    let total = 0;

    for(let num of arr){
        total += num;
    }

    let avg = total / arr.length;
    let roundedAvg = avg.toFixed(2);

    console.log("Total : " +total);
    console.log("Average : "+roundedAvg);

    if(roundedAvg >= 75){
        console.log("Distinction");
    }else if(roundedAvg >= 40 && avg < 75){
        console.log("Pass");
    }else{
        console.log("Fail");
    }

}

let arr = [35, 67, 54, 32, 70, 41, 62];
marks(arr);



let sum = arr.reduce((num, add) => add + num, 0);
console.log(sum);