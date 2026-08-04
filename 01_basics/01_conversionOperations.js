let score= "33";

console.log(typeof score); //string
console.log(typeof (score)); //string

let valueInNumber= Number(score);
console.log(typeof valueInNumber); //number 
console.log(valueInNumber); //33

let letterScore= "33abc";

console.log(typeof letterScore); //string
let valueInNumber2= Number(letterScore);
console.log(typeof valueInNumber2); //Number
console.log(valueInNumber2); //NaN

//"33" => 33
//"33abc" => NaN
//true= 1;
//false=0;
//string => number => NaN

let isLoggedIn= "1";

let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); //boolean    
console.log(booleanIsLoggedIn); //true

//1=> true;
//0=> false;
//"hitesh"=> true;
//""=> false;

let someNumber= 33;

let stringNumber= String(someNumber);
console.log(typeof stringNumber); //string
console.log(stringNumber); //33
