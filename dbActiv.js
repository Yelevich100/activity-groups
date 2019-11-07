const mysql = require('promise-mysql');

let db;

const connectionPromise = mysql.createPool({
        connectionLimit: 100,
        host: process.env.MYSQL_URL,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB
    })
    .then((c) => {
        db = c;
    })
    .catch((e) => {
        console.error(e);
    });

module.exports = {
    query
}

async function query(str) {
    await connectionPromise;
    return db.query(str);
}