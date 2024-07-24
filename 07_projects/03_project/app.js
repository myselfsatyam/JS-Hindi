let clock=document.querySelector('#clock');



setInterval(function(){
    let date=new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleString();
},1000); //1000=>1sec