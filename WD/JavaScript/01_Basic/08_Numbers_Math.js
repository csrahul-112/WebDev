const score = 400;
// console.log(score);
const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const number1 = 123.98102;
// console.log(number1.toPrecision(5));
// console.log(number1.toPrecision(3));
// console.log(number1.toPrecision(2));
// console.log(number1.toPrecision(6));

const Hundreds = 1000000;
// console.log(Hundreds.toLocaleString());         //Default is American way of writing money
// console.log(Hundreds.toLocaleString("en-In"));


const minNum = Number.MIN_VALUE;
const maxNum = Number.MAX_VALUE;
const minSafe = Number.MIN_SAFE_INTEGER;
const maxSafe = Number.MAX_SAFE_INTEGER;

// console.log(minNum, minSafe, maxNum, maxSafe);
// console.log(Number);


//++++++++++++++++++++++++++  Maths +++++++++++++++++++++++++++++//
// console.log(Math);
// console.log(Math.abs(-4), Math.abs(4), Math.abs(0));

// console.log(Math.round(4.2), Math.round(4.5), Math.round(4))

// console.log(Math.ceil(4.1), Math.ceil(4.9));
// console.log(Math.floor(4.9), Math.floor(4.1));

// console.log(Math.min(2,3,1,-2,5));
// console.log(Math.max(2,3,1,-2,5));

console.log(Math.random);
console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));

min = 1;
max = 6;

console.log(Math.floor(Math.random() * (max - min +1)) + min);  //Used Very Often one example is any dice gaem or can be used to make rock paper scissor