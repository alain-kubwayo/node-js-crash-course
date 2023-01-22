const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Equipment = require('./models/equipment');

// express app
const app = express();

// connect to mongodb
const dbURI = "mongodb+srv://alainhk1:mongodbnode@gym_equipment.lnhliaw.mongodb.net/gym_equipment?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => app.listen(3003))
    .catch(err => console.log(err));

// register view engine 
app.set('view engine', 'ejs');
// app.set('views', 'myviews'); // in case your views are in a different folder like 'myviews'

// listen for requests
// app.listen(3003); // better to do it after a connection to the database has been established

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
app.use(express.urlencoded({extended: true})); // needed when POSTing data from form

// use morgan
app.use(morgan('dev')); // 'dev', 'tiny'

// !SANDBOX ROUTES
/* 
// mongoose and mongo sandbox routes
app.get('/add-equipment', (req, res) => {
    const equipment = new Equipment({
        name: "jumping ropes",
        snippet: "The best in the Gym industry",
        description: "Lorem ipsuhm descriptions.s.s kdsldldsjsslsljdlssljdlslsjsls"
    });

    equipment.save()
        .then(result => res.send(result))
        .catch(err => console.log(err));
})

app.get('/all-equipment', (req, res) => {
    Equipment.find()
        .then(result => res.send(result))
        .catch(err => console.log(err));
})

app.get('/single-equipment', (req, res) => {
    Equipment.findById('63cd37d81fcc235dae22eca6')
        .then(result => res.send(result))
        .catch(err => console.log(err));
})

*/



// !ROUTES
app.get('/', (req, res) => {  
    // const equipments = [
    //     {name: "jumping ropes", snippet: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, aperiam provident!"},
    //     {name: "treadmill", snippet: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, aperiam provident!"},
    //     {name: "training bench", snippet: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, aperiam provident!"},
    // ];
    // res.render('index', {
    //     title: 'Home',
    //     equipments
    // });
    res.redirect('/equipment');
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

// Equipment routes

app.get('/equipment', (req, res) => {
    Equipment.find()
        .sort({createdAt: -1}) // descending order: newest first
        .then(result => res.render('index', {
            title: 'All Equipment',
            equipment: result
        }))
        .catch(err => console.log(err));
})

app.post('/equipment', (req, res) => {
    // console.log(req.body);
    const equipment = new Equipment(req.body);
    equipment.save()
        .then(result => res.redirect('/equipment'))
        .catch(err => console.log(err));
})

app.get('/:id', (req, res) => {
    const id = req.params.id;
    Equipment.findById(id)
        .then(result => res.render('details', {title: 'Equipment Details', equipment: result}))
        .catch(err => console.log(err));
})

app.delete('/:id', (req, res) => {
    const id = req.params.id;
    Equipment.findByIdAndDelete(id)
        .then(result => {
            // We can't use redirect because we're using/making AJAX request / Fetch API on the frontend. Instead, send some kind of JSON data
            res.json({redirect: '/equipment'}) // this JSON, once back from server, can be received in frontend from where fetch was made
        })
        .catch(err => console.log(err))
})

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

