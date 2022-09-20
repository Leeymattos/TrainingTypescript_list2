"use strict";
class BankAccount {
    constructor(userName, password, amount) {
        this.amount = 0;
        this.history = [];
        this.userName = userName;
        this.password = password;
        this.amount = amount;
    }
    deposit(amount) {
        this.amount += amount;
        this.history.push(`+${amount}`);
    }
    withdrawal(amount) {
        this.amount -= amount;
        this.history.push(`-${amount}`);
    }
}
const account = new BankAccount('weslley123', '12345', 100);
account.deposit(100);
account.withdrawal(50);
console.log(JSON.stringify(account));
