import { Task } from "./classes/Task.js";
import { TodoTemplate } from "./classes/TodoTemplates.js";
const taskname = document.querySelector('#name');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const btn = document.querySelector('#btn');
const ul = document.querySelector('ul');
let doc;
const list = new TodoTemplate(ul);
btn.addEventListener('click', () => {
    console.log({
        "task": taskname.value,
        "Description": description.value,
        "Date": date.value
    });
    doc = new Task(taskname.value, description.value, date.value);
    list.render(doc, taskname.value, 'end');
});
