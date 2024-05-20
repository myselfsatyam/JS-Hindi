const user = {
    username: "satyam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "rohit"
//user.welcomeMessage()
//console.log(this);

// const 1=function (){
  //  let username="Satyam"
 //console.log(this.username);
//}

//1()

const sat = () =>{
    let username="Satyam"
    console.log(this.username);


}

//sat()


//onst addTwo = (num1, num2) => {
     //    return num1 + num2   //explicit return arrow function
    //}

    //const addTwo = (num1, num2) => (num1 + num2) //implicit return arrow function 


    //const addTwo = (num1, num2) => ({username: "hitesh"})


    console.log(addTwo(3, 4))
    
    
    // const myArray = [2, 5, 3, 7, 8]
    
    // myArray.forEach()