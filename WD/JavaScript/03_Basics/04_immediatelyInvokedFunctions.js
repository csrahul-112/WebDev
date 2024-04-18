//Immediately Inviked Function Expression (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();  //if we don't write this ':' here it will throw error because this function won't stop executing

( (name) => {
    console.log(`DB Connected AGAIN WITH ${name}`);
})('RAHUL')