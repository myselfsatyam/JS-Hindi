//if
const isuserLoggedIn = true
const temprature= 41
//if(2==="2"){  // === is strict comparison operator for comparing datatypes of parameters
//  console.log("executed");
//}

//if(temprature === 40 ){
//    console.log("Less than 50");
//}
//else{
//    console.log(`Greater than 50`);
//}

//console.log(`Execute`);
//<,>,<+,>=,==,===,!=.!==


const score= 500

//if(score>100){
//    let power="fly"
//    console.log(` user power : ${power}`);
//}

//console.log(` user power : ${power}`);


const balance =1000

//if(balance>500) console.log("test"), console.log("test 2"); // short hand notation .


// if (balance < 500) {
//         console.log("less than 500");
//      } else if (balance < 750) {
//          console.log("less than 750");
    
//      } else if (balance < 900) {
//          console.log("less than 750");
    
//      } else {
//          console.log("less than 1200");
    
//      }


// use of if else in shopping websites

const userLoggedIn=true
const debitCard=true
const loggedInfromGoogle=false
const loggedInfromEmail=true

if(userLoggedIn && debitCard && 2==3){ //and operator gives true when all given parameters are true
    console.log("Allow to buy ");
}

if(loggedInfromGoogle || loggedInfromEmail){ // logical or operator gives true when either one of the given input parameter is true
    console.log(`User logged in`);
}