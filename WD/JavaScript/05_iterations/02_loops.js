const coding = ["js", "ruby", "java", "c", "c++", "swift", "python"];

// coding.forEach(function (val) {
//     console.log(val);
// })

//callback function doesn't have a name and it take element of array as input

// coding.forEach((val) => {
//     console.log(val);
// });

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe);  //we only giving the reference of printme not executing it by writing printMe()

// coding.forEach(  (item, index, arr) => {
//     console.log(item, index, arr);
// } ())

const myCoding = [
    {
        languageName : "Java",
        languageFileName: "java"
    },
    {
        languageName : "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
});

