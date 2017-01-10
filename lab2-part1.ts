class BankAccount {

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

let myMoney:BankAccount = new BankAccount(1000, "Maddy");
myMoney.checkBalance();
myMoney.deposit(100);
myMoney.checkBalance();
myMoney.withdraw(5);
myMoney.checkBalance();

