export class Payment {
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `Hello ${this.recepient} owes you ${this.amount} for ${this.details}`;
    }
}
