const score=400;
console.log(score); //400

const scoreValue = new Number(400);
console.log(scoreValue);  // Number (400)

console.log(scoreValue.toString()); //400
console.log(scoreValue.toString().length); //3
console.log(scoreValue.toFixed(2)); //400.00

const otherNumber= 100.567;

console.log(otherNumber.toPrecision(4)); //100.6

const hundreds= 1000000;
console.log(hundreds.toLocaleString("en-PK")); //1,000,000

// ++++Maths========
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6)); //5
console.log(Math.floor(4.6)); //4
console.log(Math.ceil(4.6)); //5

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor((Math.random()*10)+1));

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);
console.log(Math.floor(Math.random()*(max-min+1))+min);