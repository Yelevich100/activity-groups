async function register(req, res) {
    let users = await db.query("select * from users");
    for (let user of users) {
        if (user.email === req.body.email) {

            return res.status(500).send("user alredy exists")
        }

    }
    await db.query(`insert into users (userName,email,PASSWORD,phone) values("${req.body.userName}","${req.body.email}","${req.body.password}","${req.body.phone}")`);
    res.send("ok");
}

async function login(req, res) {
    let users = await db.query("select * from users");

    for (let user of users) {

        if ((user.userName === req.body.userName || user.email === req.body.userName) && user.PASSWORD === req.body.password) {

            return res.send("ok")
        }
    }

    res.status(500).send("Incorrect login credentials i.e. userName/email or password!")
}

const mysql = require('promise-mysql');
let db;

mysql.createPool({
        connectionLimit: 100,
        host: process.env.MYSQL_URL,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB
    }).then((c) => {
        db = c;

    })
    .catch((e) => {
        console.error(e);
    });

module.exports = {
    register,
    login
}