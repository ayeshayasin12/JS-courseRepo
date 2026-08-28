



const promiseOne= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resoolve,reject){
    setTimeout(function(){
        console.log("Async task2");
        resolve;
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
         resolve({username: "Ayesha",email: "ayesha@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseT= new Promise(function(resolve,reject){
     setTimeout(function(){
        resolve({username: "Chai ",email: "chai@example.com"})
     },1000)
})

promiseT.then(function(user){
    console.log(user);
})



const promisefour= new Promise(function(resolve,reject){
      setTimeout(function(){
        let error= true
        if(!error){
            resolve({username: "Ayesha",password: "ayesha123"});
        }
        else{
            reject("Error: Something went wrong");
        }
      })
})



const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({
                username: "hitesh",
                password: "123"
            })
        }
        else{
            reject("Error: Something went wrong");
        }
    },1000)
})


promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The promise is either resolved or rejected");
})


const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){ let error= true;
    if(!error){
        resolve({username: "Ayesha",password: "123"});
    }
    else{
        reject("error: File could not load");
    }},1000)
   
});
 







async function getAllUsers(){
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/users');
        const data= await response.json();
        console.log(data);
    }catch(error){
        console.log("E: ",error);
    }

}
getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})



