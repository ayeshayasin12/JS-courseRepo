// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password
//     }

//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         this._email = value
//     }

//     get password(){
//         return `${this._password}hitesh`
//     }

//     set password(value){
//         this._password = value
//     }
// }
class User{
    constructor(email,password){
        this.email= email;
        this.password= password;
    }

    getEmail(){
        return this._email.toUpperCase();
    }

    setEmail(value){
        this._email= value;
    }

    getPassword(){
        return this._password.toUpperCase();
    }

    setPassword(value){
        this._password= value;
    }
}

const ayesha= new User("ayesha@123",123);
console.log(ayesha.email);


// const hitesh = new User("h@hitesh.ai", "abc")
// console.log(hitesh.email);