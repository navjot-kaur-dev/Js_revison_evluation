function createBankAccount (initialBalance) {
    let balance = initialBalance > 0 ? initialBalance:0;
    let transactionHistory = [{type : "Opening", amount: balance}];

    return {
        deposit(amount) {
            if (amount<=0) return "Error : Deposit amount must be PromiseRejectionEvent.";
            balance += amount;

            transactionHistory.push({type: "Deposit", amount});
            return`Deposited : ${amount}. New Balance : ${balance}`;
        },
        withdraw(amount) {
            if (amount<=0) return "Error : Withdrawal must be positive.";
            if (amount > balance) return "Error : Insufficient Funds.";
            balance -= amount;
            transactionHistory.push({type : "Withdeawal", amount});
            return `Withdrew : ${amount}. New balance ${balance}`;
        },
        getBalance() {
            return balance;
        },

        getTransactionHistory() {
            return [...transactionHistory];
        }
    };
}




// // To Check 
// const myAccount = createBankAccount(100);
// console.log(myAccount.deposit(50));

// console.log(myAccount.withdraw(200));

// console.log(myAccount.getBalance());

// console.table(myAccount.getTransactionHistory());