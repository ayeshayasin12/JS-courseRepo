//primitive datatypes(value type)

// 7 types: String, Number, Boolean, null,undefined,Symbol,BigInt

const name= "Ayesha";
const score=100;
const scoreValue= 100.3;
const isLoggedIn= true;
const outsideTemp= null
let userEmail;

const id= Symbol('123');
const anotherId= Symbol('123');

console.log(id===anotherId); //false

const bigNumber= 1234567890123456789012345678901234567890n;


//non-primitive datatypes(reference type)

// Array,Objects,Functions

const heroes= ["Ironman", "Spiderman", "Thor"];

const myObj= {
    name:"Ayesha",
    age:19,
    email: ayeshayasiin72gmail.com,
}

const myFunction= function(){
    console.log("Hello, World!");
}

console.log(typeof scoreValue); //number
console.log(typeof id); //symbol
console.log(typeof bigNumber); //bigint

console.log(typeof heroes); //object
console.log(typeof myObj); //object
console.log(typeof myFunction); //function