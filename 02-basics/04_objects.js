
//const tinderuser= new Object() // it is singleton object
 const tinderuser={}             // it is non singleton object.
 tinderuser.id="123abc"
 tinderuser.name="Satyam"
 tinderuser.IsLoggedin=false

  
 //console.log(tinderuser);

 const regularuser={
    email:"satyamsh1234@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Satyam",
            lastname:"Sharma"

        }

    }
 }

 //console.log(regularuser.fullname.userfullname.firstname);


 const obj1={1:"a",2:"b"}
 const obj2={3:"c",4:"d"}

 //const obj3={obj1 , obj2}
 //const obj3=Object.assign({},obj1,obj2)
 const obj3 = {...obj1, ...obj2} // using spread operator
 console.log(obj3);
 
 const users =[
    {
        id : 1,
        email : "s@gmail.com"
    }
    ,
    {
        id : 1,
        email : "s@gmail.com"
    }
 ]
 users[1].email
// console.log(tinderuser);
 //console.log(Object.keys(tinderuser)); //return the key in form of array.
 //console.log(Object.values(tinderuser));// return the value in form of array.
 //console.log(Object.entries(tinderuser));
 //console.log(tinderuser.hasOwnProperty('IsLoggedin'));

 //destructuring of object

 const course={
    coursename :"Js in hindi",
    price : "99",
    courseInstructor:"Satyam"
 }
 //course instructor
 const {courseInstructor :instructor}= course
// console.log(courseInstructor);
console.log(instructor);

// APIS : Application Programming Interface
//{
//    "name": "Satyam"
//    "Room no": "LG-5" //Apis within objects
//}

[
  //  {}
    //{} //apis within array
    //{} // learn about api using json formmatter

]


