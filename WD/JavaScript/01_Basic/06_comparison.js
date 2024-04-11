/*
console.log("2" > 1) = true
console.log("02" > 1) = true

*/
// console.log(null > 0);  = false
// console.log(null == 0); = flase
// console.log(null >= 0); = true

/**
in upper code while null > 0 is compared null is converted in 0 an was then compared 
but in equality(==) it wasn't converted but directly compared 
and in >= the unequaltiy convert it to zero and when it is checked for equality it gives true

so the conclusion is equality and unequality works differenty in js
 */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined < 0);

// ===
console.log("1" === 1);

//
// NEVER COMPARE TWO DIFFERENT DATATYPES IT WILL CREATE CONFUSION
//