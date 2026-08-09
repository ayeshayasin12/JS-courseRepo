const user={
    username: "Ayesha",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username= "Ayesha Yasin";
user.welcomeMessage();

console.log(this); //{}

function printUserName(){
     let username= "Ayesha";
     console.log(this.username);  //undefined
     console.log(this);
}

printUserName();

const printName= () => {
    let userName= "Ahmed";
    console.log(this);
    console.log(this.userName);
}

printName();

//explicit return

const addTwo= (num1,num2) =>{
    return num1+num2
}

//implicit return
const add= (num1,num2) => num1+num2

const sum =(num1,num2) =>(num1+num2);




console.log(addTwo(3,4));
console.log(add(3,4));
console.log(sum(3,4));

//returning object

const sumTwo= (num1,num2) => ({username: "Ayesha"});

console.log(sumTwo(3,4));

const myArray= [2,5,3,6];

// myArray.forEach(() => {}) or
//myArray.forEach(function() {})or
//myArray.forEach(() => ())
