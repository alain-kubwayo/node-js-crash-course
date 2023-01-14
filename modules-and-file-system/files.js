const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => { // asynchronous but doesn't block
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log("last line");

// writing files
fs.writeFile('./docs/blog2.txt', 'Hello, world', () => { // asynchronous & if file doesn't exist, it creates file for us.
    console.log('file was written');
}); // replace the text


// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log("folder created");
    })
}else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}