// defining function
function sayMyName(){ 
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("M");
}

//sayMyName() //calling function.

//function to add 2 number


//number 1 and number 2 are parameters
//function addTwoNumbers(number1 , number2){
 //   console.log(number1+number2);

//}

function addTwoNumbers(number1,number2){
    //let result=number1+number2;
    //return result;
    return number1+number2;
}

const result = addTwoNumbers(5,7) // 5 and 7 are arguements
//console.log( "Result : ",result);


function LoginUsermessage(username){
if(!username){
    console.log("Please enter a valid username");
    return
}

    return `${username} just logged in`
}


//console.log(LoginUsermessage("Satyam"));
//console.log(LoginUsermessage()); //when we dont pass arguements it gives undefined as output

function CalculatecartPrize(val1,val2,...num1){
    return num1

}
 //console.log(CalculatecartPrize(200,400,600,800))

 const user ={
    username:"Satyam",
    price:200
 }

 function handleObject(anyobject){
    console.log(` Username is ${anyobject.username} and price is ${anyobject.price}`);
 }

 //handleObject(user)
 
 const NewArray=[200,400,600,800]

 function returnSecondvalue(getArray){
    return getArray[1]

 }

 //console.log(returnSecondvalue(NewArray));
 console.log(returnSecondvalue([200,400,600,800]));