const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine 
app.set('view engine', 'ejs');
// app.set('views', 'myviews'); // in case your views are in a different folder like 'myviews'

// listen for requests
app.listen(3003);

// our own custom middleware
/*
app.use((req, res, next)=>{ // this fires for every request since it's at the top
    console.log('new request made:')
    console.log('host: ', req.hostname); // localhost
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next(); // stops browser from hanging and tells express to move on to the next request
});
*/

/*
app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
});
*/

// middleware & static files
app.use(express.static('public')); // public folder will be made available as a static file to the frontend

// use morgan
app.use(morgan('dev')); // 'dev', 'tiny'

app.get('/', (req, res) => {  
    const equipments = [
        {name: "dumbell set", snippet: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, aperiam provident!"},
        {name: "treadmill", snippet: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, aperiam provident!"},
        {name: "training bench", snippet: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, aperiam provident!"},
    ];
    res.render('index', {
        title: 'Home',
        equipments
    });
});

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

app.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create'
    });
});

// 404 page
// kinda like a catch all. Reason why it should be at the bottom
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404'
    });
})

