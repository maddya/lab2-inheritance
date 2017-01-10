class Account {
    private initialBalance:number;
    private ownerName:string;
    
    constructor(initialBalance:number, ownerName:string) {
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
    }

    deposit(amount:number):void {
        this.initialBalance += amount;
    }

    withdraw(amount:number):void {
        this.initialBalance -= amount;
    }

    checkBalance():void {
        console.log(`${this.ownerName} has $${this.initialBalance} in their account`);
    }
}

class CheckingsAccount extends Account {
    
    constructor(initialBalance:number, ownerName:string) {
        super(initialBalance, ownerName);
    }

    // deposit(amount:number):void {
    //     this.initialBalance += amount;
    // }

    // withdraw(amount:number):void {
    //     this.initialBalance -= amount;
    // }

    // checkBalance():void {
    //     console.log(`${this.ownerName} has $${this.initialBalance} in their account`);
    // }
}

console.log("checkings account:")
let myMoney = new CheckingsAccount(2000, "Maddy");
myMoney.checkBalance();
myMoney.deposit(100);
myMoney.checkBalance();
myMoney.withdraw(5);
myMoney.checkBalance();
console.log();

class SavingsAccount extends Account{
    private totalWithdraws:number;
    
    constructor(initialBalance:number, ownerName:string) {
        super(initialBalance, ownerName);
        this.totalWithdraws = 0;
    }

    // deposit(amount:number):void {
    //     this.initialBalance += amount;
    // }

    withdraw(amount:number):void {
        if (this.totalWithdraws < 3) {
            super.withdraw(amount);
            this.totalWithdraws++;
        } else {
            console.log("Cannot withdraw more than 3 times.");
        }
    }

    // checkBalance():void {
    //     console.log(`${this.ownerName} has $${this.initialBalance} in their account`);
    // }
}

console.log("savings account:")
let mySavings = new SavingsAccount(1000, "Maddy");
mySavings.checkBalance();
mySavings.deposit(100);
mySavings.checkBalance();
mySavings.withdraw(5);
mySavings.checkBalance();
mySavings.withdraw(5);
mySavings.checkBalance();
mySavings.withdraw(5);
mySavings.checkBalance();
mySavings.withdraw(5);
mySavings.checkBalance();


