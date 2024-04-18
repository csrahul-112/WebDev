if(true){
    let a = 10;
    const b = 102;
    var c = 1231;
    // console.log("Inner ", a);
}

// console.log(a);  // output "ERROR" a is not defined 
// console.log(b);  // output "ERROR" b is not defined
// console.log(c);  // output 1231 this is problem with var even if we would have declare it as c  = 30 the same problem persist this is why var is not recemmonded to use, 

//special note(Interview) global scope is different in our code edittor and in browser's console.log()

/**
  Scope level and mini hoisting Lecture
 */

function one(){
    const username = "Rahul";

    function two(){
        const webSite = "Amazon";
        console.log(username);
    }
    // console.log(webSite);
    two();
}
// one();

//+++++++++++++++++++ Intresting +++++++++++++++++++++


function addOne(num){
    return num + 1;
}

addOne(5);

/**
{function addOne(num){
return num + 1;
}

addOne(5); (Runs fine)}

{
    addOne(5);  (Still runs fine)
    function addOne(num){
    return num + 1;
    }

    
}

{
    const addTwo = function(num){
        return num + 2;
    }

    addTwo(3); (runs fine and now holds value 5)
} [But]
{   
    addTwo(2); (Gives error cannot access 'addTwo' before initialization)
    const addTwo = function(num){
        return num + 2;
    }
}
 */