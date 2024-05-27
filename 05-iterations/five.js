// for each loop
// it consists of call back function 
// call back function doesnot posses any name

const coding=["js","ruby","py","cpp"]

// coding.forEach( function (val){
//     console.log(val);
// })

// for each using arrow function

// coding.forEach((item)=>{
//     console.log(item);
// })

//for each by passing another function

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
    
// });



const myCoding=[
    {
        languageName:"Javascript",
        languageFileName:"js"

    },
    {
        languageName:"Java",
        languageFileName:"java"

    },
    {
        languageName:"python",
        languageFileName:"py"

    }
]

 myCoding.forEach((item)=>{
    console.log(item.languageFileName);
    console.log(item.languageName);
 })