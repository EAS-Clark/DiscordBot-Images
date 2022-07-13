const mysql = require('mysql');


var connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'example',
    database: 'db'
});

connection.connect();


module.exports = function(){return connection;}
