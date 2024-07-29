//let url="https://catfact.ninja/fact";

fetch(url) // fetch(url) returns a promise in form of response
.then((res)=>{
   //console.log(res);
   //to read data we use json and it return a promise which contains object
   //res.json().then((data)=>{
    //console.log(data);
    return res.json();
   }).then((data)=>{
    console.log("Data :",data.fact);
   })
.catch((err)=>{
    console.log(`Error :`,err);
})
// Method Chaining

fetch(url)
.then((res)=>{
    return res.json();
}).then((data2)=>{
    console.log("Data 2:",data2.fact);
    return fetch(url);
}).then((res)=>{
    return res.json();
})
.then((data3)=>{
    console.log("Data 3",data3.fact);
}).catch((err)=>{
    console.log(`ERROR:`,err);
})

// JS doesnot wait api calls if some code is wriiten other than api requests it will execute

console.log(`Satyam`);

// using async await function

async function getFacts(){
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log(data.fact);

        let res2=await fetch(url);
        let data2=await res.json();
        console.log(data2.fact);
    
    }
catch(e){
    console.log(`Error : `);
}


}

console.log("bye");