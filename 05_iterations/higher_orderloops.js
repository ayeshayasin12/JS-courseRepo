//for of

["","",""];

[{},{},{}];

const arr= [1,2,3,4,5];

for(const num of arr){
    console.log(num);
}

const greetings= "Hello Ayesha";

for(const greet of greetings){
    console.log(greet);
}

const map= new Map()
map.set("IN","India");
map.set("USA","United States");
map.set("Fr","France");
map.set("IN","India");

console.log(map);

for(const [key,value] of map) {
    console.log(key+":-"+value);
}


//forin loop required for objects and more things as well

const myObject = {
    js: "javscript",
    cpp: "C++",
    rb: "Ruby"
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const coding=["js","ruby","java","python","cpp"];

coding.forEach(function (val){
    console.log(val);
})

coding.forEach((item) =>{
    console.log(item);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

coding.forEach((item,index,arr) =>{
    console.log(item,index,arr);
})

const myCoding=[
    {
        languageName:"java",
        languageFileName: "java"

    },
    {
           languageName: "javascript",
           languageFileName: "js"
    },
    {
           languageName: "python",
           languageFileName: "py"
    }
]

myCoding.forEach((item) =>{
    console.log(item.languageName);
})