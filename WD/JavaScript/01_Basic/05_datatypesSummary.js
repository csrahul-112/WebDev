/**
There are only two type of datatype based on how data is stored or accesed from the memory 
1. Primitive   2. Non Primitive

if copy of the data is passed for on some function instead of it's reference it's primitive
if reference of the data itself is passed then it's non primitive

 */

// Primitive
// String, Number, BigInt, null, undefined, Symbol, Boolean

const bigNUmber = 383;
console.log(typeof bigNUmber);

const id = Symbol('123');
const sno = Symbol('123');
console.log(id === sno);


//Non primitive / Reference Type
//Arrays, Object, Function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack (Primitive)  | heap (Non-Primitive)
let varOne = 12;
let varTwo = varOne;
varTwo = 15;
console.log(varTwo , varOne);

let AboutMe = {
    NAme : "Rahul",
    Email : "rk@gmail.com"
}

let AboutMeTwo = AboutMe;
AboutMeTwo.NAme = "Arubindo";
console.log(AboutMe.NAme, AboutMeTwo.NAme);

/**
In Stack a copy of existing variable is created and alotted to new one
while in Head the same reference of the already existing object is passed
 */