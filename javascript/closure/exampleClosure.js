function bankAccount(){
    let balance = 0;

    return {
        deposit(amount){
            balance += amount;
            console.log("After deposit balance : ",balance);
        },
        withdraw(amount){
            balance -= amount;
            console.log("After withdraw balance :", balance);
        }
    };
}

const account = bankAccount();
account.deposit(1000);
account.withdraw(500);