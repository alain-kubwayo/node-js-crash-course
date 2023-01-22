const express = require('express');

// express app
const app = express();

// register view engine 
app.set('view engine', 'ejs');
// app.set('views', 'myviews'); // in case your views are in a different folder like 'myviews'

// listen for requests
app.listen(3003);

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

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

app.get('/equipments/create', (req, res) => {
    res.render('create', {
        title: 'Create'
    });
});

app.use((req, res) => {
    res.status(404).render('404', {
        title: '404'
    });
})

