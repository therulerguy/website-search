const express = require('express');
const mysql = require('mysql');

var app = express();

var connection  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'my_db'
});

connection.connect(function(error) {
    // callback 
    if(error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// app.get('/', function(req, res) {
//     // about mysql
//     connection.query('SELECT * FROM my_db.website', function(error, results, fields) {
//         // callback function
//         if (error) {
//             console.log('Error in query');
//         } else {
//             console.log('Successful query');
//             console.log(results);
//             res.send(results);
//         }
//     });
// })

app.get('/', function(req, res) {
    var name = req.query.query;
    connection.query(`SELECT idwebsite FROM my_db.website WHERE name = '${name}'`, function(error, results, fields) {
        if (error) {
            console.log('Error in query');
        } else {
            console.log('Successful query');
            console.log(results);
            res.send(results);
        }
    });
})

app.listen(1337);