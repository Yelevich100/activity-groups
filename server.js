require("dotenv").config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
// const ejs = require('ejs');
const port = process.env.PORT || 8080;;
const registration = require('./registration.js')

app.set('view engine', 'ejs');
app.use(cookieParser());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => res.sendFile('./public/pages/home.html', {
    root: __dirname
}));
app.get('/query', (req, res) => {

    res.render('query', {});
});

app.get('/registration', (req, res) => res.sendFile('./public/pages/Registration.html', {
    root: __dirname
}));
app.get('/login', (req, res) => res.sendFile('./public/pages/login.html', {
    root: __dirname
}));

app.post('/registration/register', (req, res) => {

    return registration.register(req, res);

});

app.post('/registration/login', (req, res) => {
    return registration.login(req, res);
});


// app.get('/item/:subtopicid', async (req, res) => {
//     let items = await db.query('select * from items where SubTopicId = ' + req.params.subtopicid)
//     res.render('pages/topic', {
//         items
//     });
// })
app.listen(port, () => console.log('Example app listening on port ' + port));