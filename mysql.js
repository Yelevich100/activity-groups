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
        // return db.query("sejlect * from users")
    })
    // .then(user => {
    //     console.log(user);
    // })
    .catch((e) => {
        console.error(e);
    });