//Array
const arr = [0, 7, 1, 4, 3, 9, "HeyThere", null, undefined];
const arr2 = ["Name", "Email", "Roll No", 1, true];
const newArr = new Array(1,2,3,4,5);

// console.log(newArr[1]);
// console.log(newArr);
// newArr.push(6);
// console.log(newArr);
// newArr.pop();
// console.log(newArr);

// newArr.unshift(5);  //Shifts the whole array by one index and put the given element at 1st index
// console.log(newArr);  
// newArr.shift() // shift the whole array to left side by one index removing the very first element
// console.log(newArr);

// console.log(newArr.includes(1));  //true
// console.log(newArr.includes(19)); //false

// console.log(newArr.indexOf(1));  //0
// console.log(newArr.indexOf(19)); //-1

const myArr = newArr.join(); //myArr is joined with array newArr and converted to string
// console.log(myArr);  //1,2,3,4,5
// console.log(newArr); //[ 1, 2, 3, 4, 5 ]


//slice, splice
console.log("A ", newArr);

const sliceArr = newArr.slice(1,3);
console.log(sliceArr);
console.log("B ", newArr);

const spliceArr = newArr.splice(1,3);
console.log(spliceArr);
console.log("C ", newArr);