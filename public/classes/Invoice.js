export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `Hello ${this.client} i owe you ${this.amount} for ${this.details}`;
    }
}
