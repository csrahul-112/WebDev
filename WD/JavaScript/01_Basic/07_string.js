const name = "Rahul";
const repoCount = " 50";

console.log(name + repoCount);

console.log(`My name is ${name} and my total repositories is${repoCount}.`);

const gameName = new String("Rahul Is A Cosmic Being");

// console.log(gameName);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(name.toUpperCase())

// const newStr = gameName.substring(0,3);
// console.log(newStr);
// const newString = gameName.slice(0,3);
// console.log(newString);
// console.log(gameName.slice(-4,-2)); //in negative index counting starts from end with -1 and the intersection is returned
/**
const str = "The morning is upon us.";
str.slice(-3); // 'us.'
str.slice(-3, -1); // 'us'
str.slice(0, -1); // 'The morning is upon us'
str.slice(4, -1); // 'morning is upon us'
 */

const str1 = "    Rahul      ";
console.log(str1);
console.log(str1.trim());
const url = "https://Rahul%20Programminig.com"

console.log(url.replace("%20", '-'));
console.log(url.includes('Rahul'));
console.log(url.includes("HeMan"));
const Arr1 = gameName.split(' ')
console.log(Arr1);