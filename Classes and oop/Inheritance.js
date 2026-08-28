// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

class User{
    constructor(username){
        this.username= username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email= email;
        this.password= password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

// class Teacher extends User{
//     constructor(username, email, password){
//         super(username)
//         this.email = email
//         this.password = password
//     }

//     addCourse(){
//         console.log(`A new course was added by ${this.username}`);
//     }
// }
const userOne= new User("Ayesha");
const userTwo= new Teacher("Ayesha Yasin","ayeshayasiin7@gmail.com",123);

userOne.logMe();
userTwo.addCourse();

console.log(userTwo instanceof Teacher);

// const chai = new Teacher("chai", "chai@teacher.com", "123");

// chai.logMe()
// const masalaChai = new User("masalaChai")

// masalaChai.logMe()

// console.log(chai instanceof User);