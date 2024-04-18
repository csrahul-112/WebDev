// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// } 

// for of

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    // console.log(num);
}

const greetings = "Hello World";

for (const greet of greetings) {
    if(greet == " "){
        continue;
    }
    console.log(`Chars in string is ${greet}`);
}


// for of

// ["", "", ""]
// [{}, {}, {}]

const arr1 = [1, 2, 3, 4, 5]

for (const num of arr1) {
    //console.log(num);
}



// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key of map) {
    console.log();
}

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
