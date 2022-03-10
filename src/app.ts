
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form1= document.querySelector('.new-item-form') as HTMLFormElement;



const type= document.querySelector('#type') as HTMLSelectElement;
const tofrom= document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const  amount = document.querySelector('#amount') as HTMLInputElement;



const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)


form1.addEventListener('submit', (e:Event)=>{
    e.preventDefault()
    let docs:HasFormatter;

    if(type.value==='invoice'){
      docs= new Invoice( tofrom.value,details.value,amount.valueAsNumber)   
     
    }else{
    docs= new Payment( tofrom.value,details.value,amount.valueAsNumber)
    }

    list.render(docs, type.value,"end")
   
})


