const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by Apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['js', 'ruby', 'python', 'java', 'cpp'];
for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('Fr', 'France')
map.set('IN', 'Bharat')

for (const key in map) {
    console.log(key);
}