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