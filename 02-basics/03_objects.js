// singleton
//object.creta (This is done is using constructor method)
//object literals

  const mysym = Symbol("key 1")


 const Jsuser={
    name:"Satyam",
    fullname:"Satyam Sharma",
    [mysym]:"key1",
    age:19,
    location:"Mosamgarh",
    email:"satyam21689@gmail.com",
    is_loggedin: false,


 }
  // console.log(Jsuser.email);
  //console.log(Jsuser["email"]);
  //console.log(Jsuser["fullname"]);
  //console.log(Jsuser.mysym);
 // console.log(typeof (Jsuser.mysym));

  Jsuser.email="satyamsh21345@gmail.com"
  //Object.freeze(Jsuser)
  Jsuser.email ="satyamsh67@gmail.com"
  //console.log(Jsuser);



  Jsuser.greeting = function(){
   console.log("Hello JS user");
  }

  console.log(Jsuser.greeting());


  Jsuser.greetingTwo= function(){
   console.log(`Hello JS user, ${this.name}`);
  }
  console.log(Jsuser.greetingTwo());