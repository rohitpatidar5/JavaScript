// const promiseOne = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve()
//     },1000)

// })
// promiseOne.then(function(){
//     console.log("promise consumed");
// })




// new PromiseTwo(function(resolve, reject){

//     setTimeout(function(){
//     console.log("async task is completed");
// resolve();},1000)

// }).then(function(){
//     console.log("promise consumed")
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){ 
//     resolve({username: "rohit", email: "rohit@example.com"})},1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task is completed")
        
//         let error= false;
//         if(!error){
//             resolve({username:"rohit", email:"rohit@example.com"})
//         }else{
//             reject("ERROR: something went wrong!")
//         }
//     },1000)
// })


// promiseFour.then(function(user){
//     console.log(user);
//     return user.username
// }).then(function(username){    //chaining(get the value that are return from the uper then)
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log("promise is excuted")
// })


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"rohit", password: "123"})
        }else
        reject("ERROR:somthing went wrong")
    },1000)
})


async function consumePromiseFive(){
   try{ const response = await promiseFive;
    console.log(response)}
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()



// async function getAllUsers() {
// try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json()
//     console.log(data);
    
// } catch (error) {
//     console.log("E:-", error)
// }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))