const { people, ages } = require('./people');

console.log(people, ages);

const os = require('os'); // built in os module

// console.log(os); // object provides a lot of info. on the current OS that the code is running on
console.log(os.platform(), os.homedir());

