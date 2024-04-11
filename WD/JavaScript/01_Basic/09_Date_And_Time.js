//Dates

let myDate = new Date();
// console.log("toISOString " + myDate.toISOString());
// console.log("toJSON " + myDate.toJSON());
// console.log("toLocaleDateString "+myDate.toLocaleDateString());
// console.log("toDateString "+myDate.toDateString());
// console.log("toLocaleString " + myDate.toLocaleString());
// console.log("toTimeString " + myDate.toTimeString());
// console.log("toUTCString " + myDate.toUTCString());
// console.log(typeof myDate);

const myCreatedDate = new Date(2023, 0, 31, 6, 0)
const myCreatedDate2 = new Date("12-01-2023")
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getTime());
console.log(newDate.getDate());