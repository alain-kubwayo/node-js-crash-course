// Global object
// console.log(global);

// global.setTimeout
setTimeout(()=>{
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

const int = setInterval(()=>{
    console.log("in the interval");
}, 1000);

console.log(__dirname); // gets the absolute path of the current folder that the file is in
console.log(__filename); // gets the absolute path of the current folder with the file name

// Node.js doesn't have access to window object hence no document and HTML DOM interaction