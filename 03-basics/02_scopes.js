//var c=300
let a=300

if(true){
    let a=10;
    const b=20;
     c=30
     console.log("inner:", a);

}
//console.log(a);
//console.log(b);
//console.log(c);


function One(){
    const username= "Satyam"

    function Two(){
        const website="You tube"
        console.log(username);
    }
    //console.log(website); // website scope is within the function two block 

    Two()
}

 //One()

 if(true){
    const username="Satyam";
    if(username=="Satyam"){
        const website=" Youtube";
        console.log(username + website);

    }
    //console.log(website);

 }
  //console.log(username);

  
// ++++++++++++++++++ interesting ++++++++++++++++++


//console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}