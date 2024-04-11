let score = 10;
console.log(typeof score);
console.log(score);

score = null
console.log(typeof score);
console.log(score);

score = Number(score);
console.log(typeof score); // this should not happen it's an issue in javascript because it's loosely typed
console.log(score); 


/*
On Conversion score = Number(score) for difff values of score type will be number but value
33 = 33
33ac = NAN
hitesh = NaN
undefined = NaN
null = 0
true = 1
false = 0

*/

console.log("1" + 2);      
console.log(1 + "2");
console.log("1" + "2");
console.log(1 + 2 + "3");
console.log("2" + 1 + 1);
/*
which ever operation comes first with some specific datatype is given priority
*/

console.log(+ true)
console.log(1+true);
console.log(true + 1);
// console.log(true + );   // gives error
console.log();

let isLoggedIn;
let isLoggedIn1 = "Rahul"
let val = Boolean(isLoggedIn);
console.log(val)
let val1 = Boolean(isLoggedIn1);
console.log(val1)

/*
On Conversion any string is converted to true if it's not empty and false otherwise
"" = false
" " = true
"1" = true
"q" = true
"0" = true
1 = true
if undefined then false
null = false
*/
