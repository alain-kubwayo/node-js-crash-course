const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3003);

app.get('/', (req, res) => {
    // res.write('');
    // res.end();
    // res.send(); // automatically infers the content type and the status codes

    // res.send("<p>Home Page</p>")
    // below checks for absolute path (relative to the computer)
    res.sendFile("./views/index.html", { root: __dirname});

});

app.get('/about', (req, res) => {
    // res.send("<p>About Page</p>");
    res.sendFile("./views/about.html", { root: __dirname});
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", {root: __dirname});
});