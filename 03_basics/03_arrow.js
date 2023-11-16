const user = {
    username: "Hitesh",
    price: 999,
    welcomeMessage: function () {
        // this -> refer to current context
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();


// console.log(this); // refer to global object


// function chai() {
//     let username = "Hitesh";
//     console.log(this);
//     console.log(this.username); // cannot access username
// }
// chai();

// const chai = function () {
// let username = "Hitesh";
// console.log(this.username); // cannot access username
// }
// chai();


const chai = () => {
    let username = "Hitesh";
    console.log(this);
    console.log(this.username); // cannot access username
}
// chai();


() => { };
// const addTwo = (num1, num2) => {
//     return num1 + num2;  // explicit return
// }

// const addTwo = (num1, num2) => num1 + num2; // emplicit return

// const addTwo = (num1, num2) => (num1 + num2); // emplicit return , no need to write return keyword

const addTwo = (num1, num2) => ({ username: "Hitesh" })  // return object

console.log(addTwo(3, 4));

const myArray = [1, 5, 3, 7, 8];
myArray.forEach(function () { });
myArray.forEach(() => { });
// myArray.forEach(() => ());