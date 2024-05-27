// For in loop is used for iterating over objects.

const myObject={
    "js":"Javacsript",
    "cpp":"C++",
    "rb":"Ruby",
    "swift":"Swift by app"

}

for (const [key,value] in myObject) {
   // console.log(`${key} is acronym for ${myObject[key]}`);
    
}


const programming =["js","rb","py","java","cpp"]

for (const key in programming) {
    //console.log(key); // in case of array key refers to array index from zero
    console.log(programming[key]);     // it returns array elements.
    }

