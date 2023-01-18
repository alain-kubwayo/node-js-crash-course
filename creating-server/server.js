const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // req has information such as url, method, etc.
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('content-type', 'text/html'); // text/plain, json, text/html, etc.
    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('<h1>hello, world</h1>');
    // res.write('<h1>Hello again</h1>');
    // res.end();

    let path = './views';
    switch(req.url){
        case "/":
            path += "/index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "/about.html";
            res.statusCode = 200;
            break;
        case "/about-us":
            res.statusCode = 301; // redirect => resource moved permanently from about-me to about
            res.setHeader("Location", "/about");
            res.end();
            break;
        default: 
            path += "/404.html";
            res.statusCode = 404;
    }

    // Sending an HTML file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else {
            // res.write(data);
            // res.end();
            res.end(data); // useful when sending one file at time
        }
    });
});

server.listen(3002, 'localhost', () => {
    console.log("listening for requests on port 3002");
});


// Status codes: describe the type of response being sent to the browser and how successful the request was

/*
    200 => OK
    301 => Resource moved
    404 => Not found
    500 => Internal server error

    Range:
    100 range => informational responses
    200 range => success codes
    300 range => codes for redirects
    400 range => user or client error codes
    500 range => server error codes
*/