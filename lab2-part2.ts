class SavingsAccount {
    private initialBalance:number;
    private ownerName:string;
    private totalWithdraws:number;
    
    constructor(initialBalance:number, ownerName:string) {
        this.initialBalance = initialBalance;
        this.ownerName = ownerName;
        this.totalWithdraws = 0;
    }

    deposit(amount:number):void {
        this.initialBalance += amount;
    }

    withdraw(amount:number):void {
        if (this.totalWithdraws < 3) {
            this.initialBalance -= amount;
            this.totalWithdraws++;
        } else {
            console.log("Cannot withdraw more than 3 times.");
        }
    }

    checkBalance():void {
        console.log(`${this.ownerName} has $${this.initialBalance} in their account`);
    }
}

let mySavings:SavingsAccount = new SavingsAccount(1000, "Maddy");
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
