
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() // Exicution of function
// sayMyName // Reference of function

// function addTwoNumbers(number1, number2) {   // number1, number2 parameters
//     console.log(number1 + number2);
// }
// addTwoNumbers();
// addTwoNumbers(3, 5); //  arguments

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result
    return number1 + number2;
}
const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);


function loginUserMessage(username = "Sam") { // sam is default value
    // if (username === undefined) {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Hitesh"));
// console.log(loginUserMessage());



function calculatorPrice(val1, val2, ...num1) {  // ... rest operator 
    return num1;
}
// console.log(calculatorPrice(100, 200, 400, 2000));

const user = {
    username: "Hitesh",
    prices: 199
}
function handledObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handledObject(user);
handledObject({
    username: "Sam",
    price: 399
});

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));;