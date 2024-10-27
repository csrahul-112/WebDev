const user = {
    username : "Rahul",
    price : 990,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();  //Rahul , welcome to website (Before adding console.log(this))

// user.username = "Raido";

// user.welcomeMessage();  //Raido , welcome to website (Before adding console.log(this))


//After adding console.log(this) in the welcomeMessage()
/**
Rahul , welcome to website
{
  username: 'Rahul',
  price: 990,
  welcomeMessage: [Function: welcomeMessage]
}
Raido , welcome to website
{
  username: 'Raido',
  price: 990,
  welcomeMessage: [Function: welcomeMessage]
}

we got this output because this talks about the current context(Variables)
 */



//Special note value of out of any object in any code editor(Node Enviorment or any other js engine) and in browser is different in editor it refer to an empty object({}) which is the global object, because there is no object in this scope but in browser there is a global object which is window and it is returned by this in that case.


// function chai(){
//     let username = "Rahul"
//     console.log(this.username);
// }

// chai();  // we cannot use this like this in a function it gives undefined
/**
    function chai(){
    let username = "Rahul"
    console.log(this.username);
    }

    chai();  // we cannot use this like this in a function it gives undefined
 */

// function chai1(){
//     let username = "Radha"
//     console.log(this);  //if we print this inside a function it returns a lot of values
// }

// chai1()  

//Arrow function

/**
 * inside arrow function printing this will give empty curly braces just like in any global this
 * const chai11 = () => {
    let username = "Radha"
    console.log(this);      //{}
    }

    chai11()


*   const chai = () => {
        let username = "Radha"
        console.log(this.username);  //undefined
    }

    chai()
 */

let addTwo = (num1, num2) => {
    return num1 + num2;
}

//other way to write addTwo // (Special note this way of writing arrow func is used a lot while suing react)
/**
    let addTwo = (num1, num2) => (num1 + num2)
    but if we are using currly braces we will have to use return 
    let addTwo = (num1, num2) => { return num1 + num2}

    * //Returning an object from arrow function
    const fun1 = () => {username: "Rahul"}  // will give undefined if we print because we cannot return like this parantheses are mandatory in this case
    const fun1 = () => ({username: "Rahul"}) // { username: 'Rahul' }
 */

// console.log(addTwo(4, 12));

// const fun1 = () => ({username: "Rahul"})

// console.log(fun1());



