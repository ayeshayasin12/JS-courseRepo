// //singleton
// //object.create 

// //object literals

// const mySym= Symbol("key1");

// const JsUser={
//     name: "Ayesha",
//     age:19,
//     greeting1: function(){
//         console.log(`Hello ,${this.name}`);
//     },
//     [mySym]: "myKey1",
//     location: "Karachi",
//     email: "ayeshayasiin7@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday","Saturday"]


// }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// JsUser.email= "ayesha@gmail.com";
// // Object.freeze(JsUser);
// // JsUser.email= "ayeshaqamar@gmail.com";
// // console.log(JsUser);

// JsUser.greeting= function(){
//     console.log("Hello Js User");

// }

// JsUser.greeting2= function(){
//     console.log(`Hello Js User,${this.name}`);
// }

// console.log(JsUser);

// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());

//ssingleton objects

const User= new Object(); //singleton object declared via constructor
const tinderUser={} //literal object

tinderUser.id= "123abc";
tinderUser.name= "Sammy";
tinderUser.isLoggedIn= false;

console.log(tinderUser);

const regularUser={
    email: "ayeshayasiin7@gmail.com",
    address:{
        officeAddress:{
            officeAddress1:"abc123",
            officeAddress2: "jsdkj",
        },
        homeAddress:{
            residentialAddress: "dajla",
            permanentAddress: "fsosj",
        }
    },
}

console.log(regularUser.address.homeAddress.permanentAddress);

const obj1= {1:"a",2:"b"};
const obj2= {3:"a",4:"b"};
const obj3= {5:"a",6:"b"};

const obj4= Object.assign({},obj1,obj2,obj3); //assigns all the following objects to the first one

console.log(obj4);

//spread method same as arrays

const obj5= {...obj1,...obj2,...obj3};
console.log(obj5);

const users=[
    {
        id:"hdaiod",
        email:"fsudiao",
    },
    {
        id:"hsaijdiw",
        email:"jdisjdo",
    },
    {
        id:"jksfkkwo",
        email:"dakjdiaij",
    },
]

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

