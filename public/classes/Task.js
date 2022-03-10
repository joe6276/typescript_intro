export class Task {
    constructor(Taskname, description, date) {
        this.Taskname = Taskname;
        this.description = description;
        this.date = date;
    }
    Task() {
        return (`Task : ${this.Taskname} added Successfully The Task Description:
         ${this.description} and starts at ${this.date}`);
    }
}
