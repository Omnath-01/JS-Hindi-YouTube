const coding = ['js', 'ruby', 'python', 'java', 'cpp'];

// coding.forEach(function (name) {
//     console.log(name);
// });
// coding.forEach((item) => {
//     console.log(item);
// });

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, idex, arr) => {
//     console.log(item, idex, arr);
// });


const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'Java',
        languageFileName: 'java'
    },
    {
        languageName: 'Python',
        languageFileName: 'py'
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
});