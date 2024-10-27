//Functions

function sayMyName(){
    console.log("Rahul");
}

// sayMyName();
// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}
const result = addTwoNumbers(3, 6);

// console.log("Result:", result);

function userLoginMessage(username){
    if(username === undefined /*same as !usernaem */){
        console.log("Please Enter a Username.");
        return;
    }
    return `${username} just logged in`
}

// console.log(userLoginMessage("Rahul"));

// console.log(userLoginMessage(""));

// console.log(userLoginMessage());

function calculatePrice(num1){
    return num1;
}

// console.log(calculatePrice(200));            // 200
// console.log(calculatePrice(200, 300, 400));  // still output 200 baki values gayi we can take them as input cause we only have one parameter in function so to take multiple input we use rest(...) operator (this is also the spread oerator, just their use define whether it's rest or spread) it takes multiple input and return an array of all values in this case

function calculatePriceTwo(...num2){
    return num2;
}

// console.log(calculatePriceTwo(200, 200, 400, 1000, 213)); //[ 200, 200, 400, 1000, 213 ]

//we can also do one more thing

function calculatePriceThree(val1, val2, ...num3){
    return num3;
}

//in this function first two val will go to val1 and val2 respe. and the rest will go in num3;

const user = {
    username: "Rahul",
    netWorth: 0
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and net worth is ${anyObject.netWorth}`);
}

// console.log(handleObject(user));
console.log(handleObject({
    username: "Ram",
    netWorth: 100000
}));

const myNewArray= [200, 400, 100, 600];
function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray)); //400
// console.log(returnSecondValue([1000, 0, 100223, 283422, 12832])); // 0

