// Array specific loops are elaborated below.
// for of loop 

 
//["","",""] empty srting in array
//[{},{},{}]empty object in array

const arr=[1,2,3,4,5]

for (const num of arr) {  // here object refers to iteam on which interator will iterate
    //console.log(num);
}

const greetings=`Hello Worrld!`

for (const greet of greetings) {
    //console.log(`For each char is ${greet}`);
    
}

//Maps are the objects in javascript which holds unique key value pair.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


//console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
    
}


const myObject = {
    game1:"NFS",
    game2:"Spiderman"

}

// for (const [key,value] of myObject) {
//     console.log(key,":-",value);

    
// }
// Objects are not iterable using for of loop