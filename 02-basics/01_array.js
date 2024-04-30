
const myArr=[1,2,3,4,5,6]
const myHeroes=["Ironman","Spiderman"]

const myArr2= new Array(5,4,6,8,9)

//console.log(myArr[4]);
// console.log(myHeroes);
//console.log(myArr2);

// Array methods

//myArr.push(8) // Adds listed elemented to array.
//myArr.pop() // no arguement is given , it removes last element.
//myArr.unshift(7) // given arguement is placed at initial postion of array.
//myArr.shift() // no arguement is given , removes the element at 0th index.

//console.log(myArr.includes(9)); // gives boolean as output and checks whether the value given in arguement is present in array.
//console.log(myArr.indexOf(5)); // gives array index of element if present in array and gives -1 if elememt is not present in it.

const newArr=myArr.join() // .join is used to convert array into string datatype.

//console.log(myArr);
//console.log(newArr);
//console.log(typeof(newArr));


// slice and splice

console.log("A ", myArr);

const myn1=myArr.slice(0,3)
console.log(myn1); // slice doestnot include the last index value and it doenot manipulates the string.

console.log("B ", myArr);

const myn2=myArr.splice(0,3)
console.log("C ", myArr);
console.log(myn2); // splice includes the last index passed value in arguement and it modifies the string by removing the indices mentioned elements i.e. here 1,2,3 is removed.
