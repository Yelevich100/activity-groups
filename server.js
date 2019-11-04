const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

0
const port = process.env.PORT || 8080;;
const registration = require('./registration.js')
app.use(express.static('public'));
app.use(cookieParser());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => res.sendFile('./public/pages/home.html', {
    root: __dirname
}));
app.get('/registration', (req, res) => res.sendFile('./public/pages/Registration.html', {
    root: __dirname
}));
app.get('/login', (req, res) => res.sendFile('./public/pages/login.html', {
    root: __dirname
}));
app.get('/about', (req, res) => res.sendFile('./public/pages/about.html', {
    root: __dirname
}));


app.post('/registration/register', (req, res) => {

    return registration.register(req, res);

});

app.post('/registration/login', (req, res) => {
    return registration.login(req, res);
});

app.listen(port, () => console.log('Example app listening on port ' + port));