 let userEmail = "Rahul.omr.com";

if(userEmail){
    console.log("Have User Email");
}else{
    console.log("Don't Have User Email");
}
 let userEmail1 = "";

if(userEmail1){
    console.log("Have User Email");
}else{
    console.log("Don't Have User Email");
}
 let userEmail2 = [];

if(userEmail2){
    console.log("Have User Email");
}else{
    console.log("Don't Have User Email");
}
 let userEmail3 = 0;

if(userEmail3){
    console.log("Have User Email");
}else{
    console.log("Don't Have User Email");
}


/**
 *** # Notes # ***

    falsy values : false, 0,-0,BigInt 0n,"", null, undefined, NaN

    Truthy values: "0", "false", " ", [], {}, function(){},


    a way to make empty array false:
    if(userEmail.length === 0){
        console.log("Array is Empty");
    }

    const emptyObj = {}
    if(Object.keys(emptyObj).length === 0){
        console.log("Object is Empty")
    }



    // Nullish Coalescing Operator (??): null undefined
    let val1;
    val1 = 5 ?? 10; log(val1)=> 5
    val1 = null ?? 10 log(val1)=> 10
    val1 = undefined ?? 10 log(val1) => 10
    val1 = null ?? 10 ?? 12 log(val1) => 10


    //Terniary Operator(? :)
    condition ? true : false;
    




 */
