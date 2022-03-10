import { TaskFormatter } from "../interfaces/TaskFormatter.js";

export class Task implements TaskFormatter{


    constructor(
        private Taskname:string,
        private description:string,
        private date:string,
       
    ){}


    Task(): string {
        return(`Task : ${this.Taskname} added Successfully The Task Description:
         ${this.description} and starts at ${this.date}`)
    }
}