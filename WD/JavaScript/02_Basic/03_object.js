//Objects
//singleton : if we careate obejct as object literals it's not created as singleton but if it's created by constructor\(Object.create{})\ it's a singleton

//object literals

const mySym = Symbol("Key1");

const JsUser = {
    name: "Rahul",
    "full Name" :  "Rahul Kumar",
    [mySym]: "myKey1",    //declaring it like mySym : "myKey1" will give same value but it's type is string but if we want to use it as a Symbol we have to use the written syntax
    age: 21,
    location: "Delhi",
    email: "Rk@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]); //This is used and everyone should know because how full Name is declared and we can only access it this way

console.log(JsUser[mySym]);

console.log(typeof JsUser[mySym]);//here the value in it is string but the mySym itself is a symbol;

JsUser.email = "Rk@yahoo.com";
Object.freeze(JsUser);
JsUser.email = "Rk@yuyu.com";

console.log(JsUser);




