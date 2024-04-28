const name="Satyam"
const repocount=3

//console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gamename= new String('satyam-sh-m')

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(5));
console.log(gamename.indexOf('m'));

const newstring=gamename.substring(0,4);

console.log(newstring);

const anotherstring= gamename.slice(-8,5);
console.log(anotherstring);

const newstringOne = "     satyam  "

console.log(newstringOne);
console.log(newstringOne.trim());


const url ="https://satyam.com/satyam%20sharma";
console.log(url.replace('%20','-'));

console.log(url.includes('satyam'));

console.log(gamename.split('-'));
