module.exports = {
    register,
    login
}
let users = [];

function register(req, res) {
    let user = {
        userName: req.body.userName,
        password: req.body.password
    }
    for (let user of users) {
        if (user.userName === req.body.userName) {

            return res.status(500).send("user alredy exists")
        }

    }
    users.push(user);
    res.send("ok");
}

function login(req, res) {
    let user = {
        userName: req.body.userName,
        password: req.body.password
    }
    for (let user of users) {
        if ((user.userName === req.body.userName) && (user.password === req.body.password)) {
            res.send("ok");
        } else res.status(500).send("error")
    }

}

// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// const handleFiles = require('./fileHandler.js')
// const port = 4242;

// let users = [];

// const server = http.createServer((req, res) => {
//     let q = url.parse(req.url, true);
//     if (q.pathname === '/') {
//         q.pathname = '/pages/homepage.html'
//         handleFiles(q, req, res);
//     } else if (q.pathname === '/user/login') {
//         res.statusCode = 200;
//         for (let u of users) {
//             if (u.userName === q.query.userName && u.password === q.query.password) {
//                 console.log('goog luck')
//             }
//         }
//         res.end('OK');
//     } else if (q.pathname === '/user/register') {
//         let user = {
//             userName: q.query.userName,
//             password: q.query.password
//         }
//         for (let u of users) {
//             if (u.userName === q.query.userName) {
//                 console.log('is exists')
//             }
//         }
//         users.push(user);
//         console.log(users);
//         res.statusCode = 200;
//         res.end('OK');
//     } else {
//         handleFiles(q, req, res);
//     }

// });



// server.listen(port, () => {
//     console.log('Server is running on port ' + port);
// });