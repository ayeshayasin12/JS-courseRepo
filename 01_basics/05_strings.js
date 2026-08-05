const name= "Ayesha";
const repoCount= 50;

console.log(name + repoCount +"Value"); //Ayesha50Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Hello my name is Ayesha and my repo count is 50

const myName= new String("Ayesha");

console.log(myName[0]); //A
console.log(myName.__proto__);

console.log(myName.charAt(2)); //e
console.log(myName.indexOf('s')); //3

const newString= myName.substring(0,4)
console.log(newString); //Ayes

const anotherString= myName.slice(-4,4);
console.log(anotherString); 

const newStringOne= "     Ayesha  ";
console.log(newStringOne);
console.log(newStringOne.trim());  //Ayesha

const url= "https://ayeshayasiin7.github.io";
console.log(url.replace('github.io', 'github.com')); //https://ayeshayasiin7.github.com
url.replace("ayeshayasiin7","ayeshaqamar");
console.log(url.includes("ayeshayasiin7"));
console.log(url.includes("ayeshaqamar"));


console.log(url.split('.')); //['https://ayeshayasiin7', 'github', 'io']
