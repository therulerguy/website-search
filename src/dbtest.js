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


// app.post('/test', function(req, res) {
//     console.log('post received');
//     var name = req.body.url;
//     console.log(name);
//     connection.query(findQuery(name), function(error, results, fields) {
//         if (error) {
//             console.log('Error in query');
//         } else {
//             console.log('Successful query');
//             console.log(results);
//             res.send(results);
//         }
//     });
// })

// app.get('/', function(req, res) {
//     var name = 'website name will be passed here'
//     var query = `INSERT INTO my_db.website (html, name) VALUES ('${HTML}', '${WEBSITENAME}')`;
//     connection.query(query, function(error, results, fields) {
//         if (error) {
//             // I set it so name is unique in table
//             // maybe display error to user?
//             console.log('Duplicate entry');
//         } else {
//             console.log('Successful query');
//             console.log(results);
//             res.send(results);
//         }
//     });
// })

app.post('/test', function (req, res, next) {
    var name = req.body.url;
    console.log(name);
    connection.query(queries.findQuery(name), function (error, results, fields) {
        if (error) {
            console.log('Error');
        } else {
            console.log('Successful query');
            // var rows = JSON.parse(JSON.stringify(results[0]));
            console.log('WHATWHATBELOW');
            console.log(results);
            console.log('below should be undefinied');
            console.log(results[1]);
            console.log('should be html');
            console.log(results['html']);
            if(results.length === 0) {
                console.log('NOTHING HERE');
                connection.query(queries.insertQuery('test', name), function (error, results, fields) {
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