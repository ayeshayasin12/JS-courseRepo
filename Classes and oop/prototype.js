// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }

let myHeros= ["thor","spiderman"];

let heroPower= {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Ayesha= function(){
    console.log("Ayesha is present in all objects");
}

Array.prototype.heyAyesha= function(){
    console.log("Ayesha says hello");
}

heroPower.Ayesha();
myHeros.heyAyesha();

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()



// inheritance

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

const user={
    name: "chai",
    email: "chaiaurcode@gmail.com"
}

const Teacher={
    makeVideo: true
}

const TeachingSupport={
    isAvailable: true
}

const TASupport={
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername= "ChaiAurCode";

String.prototype.trueLength= function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();
// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)

// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`True length is: ${this.trim().length}`);
// }

// anotherUsername.trueLength()
// "hitesh".trueLength()
// "iceTea".trueLength()