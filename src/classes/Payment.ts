import { HasFormatter } from "../interfaces/HasFormatter.js"
 export class Payment implements HasFormatter{
    constructor(
        readonly recepient:string,
        private details:string,
        public  amount:number,
    ){}
      

    format(){
        return `Hello ${this.recepient} owes you ${this.amount} for ${this.details}`
    }
}