const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'banking',
    password:'Pratik@123'
});

module.exports = pool.promise();

