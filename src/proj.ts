console.log("heroooo")
console.log("heroooo");
//  const character= "Jonathan Nzimbi";
//  console.log(character);

//  const inputs= document.querySelectorAll('input')

//  console.log(inputs);
 
//  inputs.forEach(input =>{
//      console.log(input);
     
//  })
 
 

// const circ=(diameter:number)=>{
//  return diameter * Math.PI;
// }

// console.log(circ(35));

// let names= ['joe', 'Jonathan' ,'Ndambuki',]

// names.push('Nzimbi')
// names.push(34 )

// let numbers = [12,23,23,56,67]
// numbers.push(19)
// numbers[3]= 80;
// numbers[2]='Joe';


// let mixed =['Ken', 34,false]
// mixed.push(45)

// mixed[1]=200

// console.log(mixed);

// let mixed:(string|number|boolean)[]=[];
// mixed.push('Jonathan')
// mixed.push(34)
// mixed.push(true)

// console.log(mixed);

// const form= document.querySelector('form')!;


//classes

// class Invoice{
//     client:string;
//     details:string;
//     amount:number;

//     constructor(c:string,d:string, a:number){
//         this.client=c;
//         this.details=d;
//         this.amount=a;
//     }

//     format(){
//         return `Hello ${this.client} i owe you ${this.amount} for ${this.details}`
//     }
// }
// import { Invoice } from "./classes/Invoice.js";
// const invoice1= new Invoice('Josh', 'Blockchain website', 100000000)
// console.log(invoice1.format());


const addUid= (obj:object)=>{

    const uid = Math.floor(Math.random() * 100)
    return{...obj, uid}
}


let docone = addUid({name:'Joe', age:34})
console.log(docone)
