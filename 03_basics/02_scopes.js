// var c = 300;
let a = 100;
if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Hitesh";
    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); // cannot access website
    two();
}
// one();


if (true) {
    const username = "Hitesh";
    if (username === "Hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // error
}
// console.log(username); // error



// ************* Interesting ***************

console.log(addOne(5));; // 6
function addOne(num) {
    return num + 1;
}

// addTwo(5);  // error before defination which is vairable
const addTwo = function (num) {
    return num + 2;
}