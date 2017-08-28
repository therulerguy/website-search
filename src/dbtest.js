const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const queries = require('./queries');

var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'my_db'
});

connection.connect(function (error) {
    if (error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    next();
});

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.post('/test', function (req, res, next) {
    var name = req.body.url;
    var html = req.body.html;
    console.log('NAME AND HTML SHOULD BE BELOW');
    console.log(name);
    console.log(html);
    connection.query(queries.findQuery(name), function (error, results, fields) {
        if (error) {
            console.log('Error');
        } else {
            console.log('Successful query');
            console.log(results);
            if(results.length === 0) {
                console.log('NOTHING HERE');
                connection.query(queries.insertQuery(html, name), function (error, results, fields) {
                    //return id after insert
                    connection.query(queries.findQuery(name), function (error, results, fields) {
                        console.log('RESULTS BELOWS');
                        console.log(results);
                        res.json(results);
                    })
                })
            } else {
            console.log(results);
            res.json(results);
            }
        }
    });
})

app.listen(1337);