import { Task } from "./classes/Task.js";
import { TaskFormatter } from "./interfaces/TaskFormatter.js";
import { TodoTemplate } from "./classes/TodoTemplates.js";


const taskname = document.querySelector('#name') as HTMLInputElement;
const description = document.querySelector('#description')as HTMLInputElement ;
const date = document.querySelector('#date') as HTMLInputElement;
const btn = document.querySelector('#btn') as HTMLInputElement;
const ul = document.querySelector('ul') as HTMLUListElement;

let doc:TaskFormatter

const list= new TodoTemplate(ul)


let values:[string, string,string]
values=[taskname.value,description.value,date.value]

btn.addEventListener('click', ()=>{
   
    console.log({
        "task": taskname.value,
        "Description" :description.value,
        "Date": date.value
    })

    doc= new Task(...values)
    list.render(doc, taskname.value, 'end')

})