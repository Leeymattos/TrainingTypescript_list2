class BankAccount {
    private userName: string;
    private password: string;
    private amount: number = 0;
    private history: string[] = [];


    constructor(userName: string, password: string, amount: number) {
        this.userName = userName;
        this.password = password;
        this.amount = amount;
    }

    public deposit(amount: number) {
        this.amount += amount;
        this.history.push(`+${amount}`);
    }

    public withdrawal(amount: number) {
        this.amount -= amount;
        this.history.push(`-${amount}`);
    }

}

const account = new BankAccount('weslley123', '12345', 100);

account.deposit(100);

account.withdrawal(50);

console.log(JSON.stringify(account))
