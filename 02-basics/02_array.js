
const marvel_heroes=["Ironman","Captain America","Nova"]

const dc_heroes=["Superman","Batman","Flash"]

//marvel_heroes.push(dc_heroes) //push takes arrguement array as a element it becomes sub array.
//console.log(marvel_heroes);
//console.log(marvel_heroes[3][2]); // accesing elements of sub-array.

//const all_heroes= marvel_heroes.concat(dc_heroes) // concat method return a new array.
//console.log(all_heroes);

const all_new_heroes=[...marvel_heroes , ...dc_heroes] // it is spread operator.
//console.log(all_new_heroes);

const another_Array=[1,2,3,[4,5,6],7,[8,9,10]]
const real_another_Array=another_Array.flat(Infinity) // flat operater submerges the sub arrays and form a single parent array.
console.log(real_another_Array);


console.log(Array.isArray("Satyam")); // checkes is passed text is array or not.
console.log(Array.from("Satyam")); // converts passed text into array
console.log(Array.from({name:"Satyam"})); // Array are formed by specifying either key or value.

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3)); // of operator is used to form array from variables




