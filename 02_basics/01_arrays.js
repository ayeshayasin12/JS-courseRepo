const myArr= [0,1,2,3,4,5];

console.log(myArr[4]); //4
console.log(myArr.length); //6

const myArr2= new Array(1,2,3,4);
console.log(myArr[0]); //1

// Array Methods

myArr.push(6); //add at the end
console.log(myArr); //[0,1,2,3,4,5,6]

myArr.pop(); //remove from the end
console.log(myArr); //[0,1,2,3,4,5]

myArr.unshift(-1); //add at the start
console.log(myArr); //[-1,0,1,2,3,4,5]

myArr.shift(); //remove from the start
console.log(myArr); //[0,1,2,3,4,5]

console.log(myArr.includes(3)); //true
console.log(myArr.indexOf(3)); //3

const newArr= myArr.join();

console.log(myArr); //0,1,2,3,4,5
console.log(newArr); //0,1,2,3,4,5

//slice,splice

console.log("A", myArr);
const myn1= myArr.slice(2,4);
console.log(myArr); //0,1,2,3,4,5
console.log(myn1); //2,3

console.log("B", myArr);
const myn2= myArr.splice(2,4);
console.log(myArr); //0,1,5
console.log(myn2); //2,3,4,5
