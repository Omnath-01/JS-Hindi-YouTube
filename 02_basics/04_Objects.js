// const tinderUser = new Object();  // empty object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammly";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'a', 4: 'b' }
const obj4 = { 5: 'a', 6: 'b' }

// const obj3 = { obj1, obj2 } // object inside object
// const obj3 = Object.assign({}, obj1, obj2, obj4); // {} garandted combine
// console.log(obj3);

const obj3 = { ...obj1, ...obj2, ...obj4 } // ... spread operator  
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

course.courseInstructor
const { courseInstructor } = course; // Object destructor
console.log(courseInstructor);
const { courseInstructor: instructor } = course;  // Object destructor
console.log(instructor);


// JSON API
// {
//     "name": "Hitesh",
//     "coursename": "JS in Hindi",
//     "price": "free",
// }

[
    {},
    {},
    {}
]