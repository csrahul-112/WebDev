// const coding = ["js", "ruby", "java", "c", "c++", "swift", "python"];

// const values = coding.forEach((item) => {
//     console.log(item);
// });
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9];

// const newNums = myNums.filter((num) => num > 4); 
// console.log(newNums); //[ 5, 6, 7, 8, 9 ]

const newNums = myNums.filter( (num) => {
    return num > 4;
})
console.log(newNums);
const books = [
    {title: "Book one", genre: "Fiction", publish: 1981},
    {title: "Book Two", genre: "History", publish: 1971},
    {title: "Book Three", genre: "Science", publish: 1999},
    {title: "Book Four", genre: "Fiction", publish: 2002},
    {title: "Book Five", genre: "Non-Fiction", publish: 2007},
    {title: "Book Six", genre: "Science", publish: 1961},
    {title: "Book Seven", genre: "Fiction", publish: 2017},
    {title: "Book Eight", genre: "History", publish: 2002}
]
const userBooks = books.filter((book) => book.genre == "Fiction" && book.publish >= 2000)
console.log(userBooks);