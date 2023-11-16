// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // name IIFE
    console.log(`DB CONNECTED`);
})();

// ()()
// (function defination)(excution call)
// use IIFE because to avoid global scope pollution

(() => {
    console.log(`DB CONNECTED TWO`);
})();

(function aurcode() { console.log(`DB CONNECTED THREE`); })();

((name) => { // unnamed IIFE
    console.log(`DB CONNECTED FOUR ${name}`);
})('Hitesh');

