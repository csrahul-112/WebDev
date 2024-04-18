const course = {
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//  const {courseInstructor} = course
// we can also change the name of key (but both are exactly same):
const {courseInstructor: inst} = course
// console.log(inst);  //Hitesh

//api
// api comes in a JSON(Javascript Object Notation) format and written below sometime it also come as a array or may also contain array so we have to access the data accordingly:
// {
//     "name" : "rahul",
//     "coursename" : "Js In Hindi",
//     "Price" : "Free"
// }