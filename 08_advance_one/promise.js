const promiseOne=new Promise(function(resolve,reject){
    // do an sync task
    //db calls , cryptography,network
    setTimeout(function(){
        console.log(`Async task is complete`);
        resolve();
    },1000);

})

promiseOne.then(function(){
    console.log(`Promise consumed`);
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`Async task 2`);
        resolve();
    },3000)
}).then(function(){
    console.log(`Async task 2 resolved`);
});

const promiseThree= new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({username:`Satyam`,enmail:`ssgmail`})
    },4000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promisefour=new Promise((resolve, reject) => {
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:`Satyam`,password:`703`})
        }
        else{
            reject(`ERROR: SOMETHING WENT WRONG`)
        }
    },6000)
}).then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
   console.log(error);
})
