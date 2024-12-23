import { greet3 } from "./Mesaj.js";



console.log("Hello World")

var eskiDegisken="Bu bir var değişkendir";
console.log(eskiDegisken);

let degisken= "Bu bir let değişkendir";
console.log(degisken);

const sabitDegisken= "Bu bir const değişkendir";
console.log(sabitDegisken);

for(let i=0;i<5;i++)
{
    console.log(i);
}
let j=0;
while(j<5)
{
    console.log(j);
    j++;
} 
const newArray=[10,20,30];
for(let value of newArray){
    console.log(value);
}

const age=20;
if(age>=18)
{
    console.log("Reşit");
}else{
    console.log("Reşit değil");
}

const status= age>=18 ? 'Reşit' :'Reşit Değil';
console.log(status);

const day='Monday';

switch(day){
    case 'Monday':
        console.log('Hafta başı');
        break;
    case 'Friday':
        console.log('Çalışma günü sonu');
        break;
    default:
        console.log('haftanın günü');
}

function greet(name){
    return `Hello ${name}`
}
console.log(greet('John Doe'));

const greet2=(name)=>`Hello ${name}`;
console.log(greet2('John Doe'));

const add=(a,b)=>a+b;
console.log(add(5,4));

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    introduce(){
        console.log(`Benim adım ${this.name} ve yaşım ${this.age}`);
    }
}

const person= new Person('John Doe',30);
person.introduce();

console.log(greet3('John'));

function fetchData(callback){
    setTimeout(()=>{
        callback('Data fetched');
    },2000);
}
fetchData(data=> console.log(data));

const fetchData2=async()=>{
    try{
        const result = await new Promise(resolve=> resolve('Data fetch2'));
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

fetchData2();