// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "!23";
tinderUser.name = "Raghu";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
const regularUser = {
    email: "Some@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Rahul",
            lastName: "Kumar"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullName.userFullname.firstName); //Just like this we can do nesting in Js to access object inside object etc

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

//const obj3 = Object.assign(obj1, obj2);  //  here obj1 is target as all the element are copied from obj2 to obj1 here obj3 === obj1
//if we want not to copy in obj 1 we can pass an empty obj // const obj3 = Object.assign({}, obj1, obj2);


const obj3 = {...obj1, ...obj2} 
// console.log(obj3);

const users = [
    {
        id: "12",
        email: "R@gmail.com",
        isLoggedIn: false
    },
    {
        id: "12",
        email: "R@gmail.com",
        isLoggedIn: false
    },
    {
        id: "12",
        email: "R@gmail.com",
        isLoggedIn: false
    },
    {},
    {},
    {}
]

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));      //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));    //[ '!23', 'Raghu', false ]
// console.log(Object.entries(tinderUser));   //[ [ 'id', '!23' ], [ 'name', 'Raghu' ], [ 'isLoggedIn', false ] ]


// console.log(tinderUser.hasOwnProperty("isLoggedIn"));  //true

