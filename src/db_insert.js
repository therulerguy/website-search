const mysql = require('mysql');
const queries = require('./queries');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'my_db'
});

connection.connect(function (error) {
    // callback 
    if (error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});


const html = '<html>test2</html>';
const name = 'http://www.test2.com';

connection.query(queries.findQuery(name), function (error, results, fields) {
    if (error) {
        // I set it so name is unique in table
        // maybe display error to user?
        console.log('Duplicate entry');
        console.log(error);
    } else {
        console.log('Successful query');
        console.log(results);
    }
});

// var query = `SELECT idwebsite FROM my_db.website WHERE name = '${name}'`;

