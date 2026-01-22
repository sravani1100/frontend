function evenOrOdd(arr){

    let even = arr.filter(number => number % 2 === 0);
    let odd = arr.filter(number => number % 2 !== 0);

    console.log("Even : " +even); //2, 4, 6, 8, 10
    console.log("Odd : "+odd);// 1, 3, 5, 7, 9
    
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
evenOrOdd(arr);