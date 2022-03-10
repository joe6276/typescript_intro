export class TodoTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, task, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerHTML = task;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.Task();
        li.append(p);
        if (position == 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
