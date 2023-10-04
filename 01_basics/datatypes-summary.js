// Primitive

// 7 types : String, Number, Boolean, null, undefied, Symbol, BigInt

const score = 100  // typeof number
const scoreValue = 100.3 // typeof number

const isLoggedIn = false // typeof boolean
const outsideTemp = null; // // typeof object
let userEmail; // typeof undefied

const id = Symbol('123') // typeof symbol
const anotherId = Symbol('123') // typeof symbol

console.log(id === anotherId);

const bigNumber = 2382983293792332n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"] // typeof object
let myObj = {
    name: "Hitesh",
    age: 22,
}// typeof object

const myFunction = function () {
    console.log("Hello World");
}// typeof fucntion object

console.log(typeof score);

/* 
JavaScript is a dynamically typed language, 
which means that data types of variables 
are determined by the value they hold at runtime 
and can change throughout the program as we assign different values to them
*/

// ++++++++++Stack and Heap memory in javascript++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
// stack memory give copy
// heap memory give reference

let myYoutubeName = "hiteshchoudrydotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email) // hitesh@google.com
console.log(userTwo.email) // hitesh@google.com