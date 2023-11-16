// object declare with 2 type
// 1 -> Literal
// 2 -> Constructor  // singleton


// Object literals
// Object.create  // constructor method
const mySym = Symbol("Key1");
const JSuser = {
    name: "Hitesh",
    "full name": "Hitesh Choudary",
    mySym: "mykey1", // not use as Symbol
    [mySym]: "mykey2",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser.mySym + " " + typeof JSuser.mySym);
// console.log(JSuser[mySym] + " " + typeof [mySym]);

// JSuser.email = "hitesh@chatgpt.com";
// Object.freeze(JSuser)  // cannot modified after freeze object
// JSuser.email = "hitesh@microsoft.com";
// console.log(JSuser.email);

JSuser.greeting = function () {
    console.log("Hello JS user");
}
JSuser.greetingTwo = function () {
    console.log(`Hello JS user ${this.name}`);
}
console.log(JSuser.greeting);
console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());
