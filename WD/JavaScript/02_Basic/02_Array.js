//+++++++++++++++++++++++++++++++++++++++Array Part 2+++++++++++++++++++++++++++
const marvelHeroes = ["Thor", "Spiderman", "Ironman"];
const dcHeroes = ["Superman", "Batman", "Flash"]

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);       //[ 'Thor', 'Spiderman', 'Ironman', [ 'Superman', 'Batman', 'Flash' ] ]
// console.log(marvelHeroes[3][1]); //Batman

const allHeroes = marvelHeroes.concat(dcHeroes);//[ 'Thor', 'Spiderman', 'Ironman', 'Superman', 'Batman', 'Flash' ]
// console.log(allHeroes);

const allHeroes2 = [...marvelHeroes, ...dcHeroes];//this method is preferred over concat because we can add more than just two arrays at a time

// console.log(allHeroes2);

const anotherArr = [1,2,3,[4,5,6], 7, [6,7,[9,2,3],9], 10];
const realAnotherArr = anotherArr.flat(Infinity)  //Actully we pass depth of nested arrays till we want the output but choosing Infinity will give you output to the final depth.  //-anotherArr.flat(depth)-//
// console.log(realAnotherArr);

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Rahul"));

// console.log(Array.from({name: "Rahul"}));  //if it cannot create a array out of argument it will return an empty array & we have to specify whether we want to create the array of values or key of the argument passed

let score1 = 100;
let score2 = 101;
let score3 = 300;

console.log(Array.of(score1, score2, score3));