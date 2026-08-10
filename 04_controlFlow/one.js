// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

const userEmail="";

if(userEmail){
    console.log("Got user email");

}
else{
    console.log("Dont have user email");

}

//falsy values

//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values

//"0","false"," ",[],{},function(){}

if(userEmail.length ===0){
    console.log("Array is empty");
}

//how to check empty object

const emptyObj={};

if(Object.keys(emptyObj).length===0){
   console.log("Object is empty");
}

// Nullish Coalescing operator (??): null undefined

let val1;
val1= 5 ?? 10
let val2= null ?? 10;
let val3= undefined ?? 15;
let val4= null ?? 10 ?? 20

console.log(val1);  //5
console.log(val2);  //10
console.log(val3); //15
console.log(val4); //10

// Terniary Operator

//condition ? true : false

const iceTeaPrice=100;
iceTeaPrice>=80 ? console.log("Greater than 80"): console.log("less than 80")