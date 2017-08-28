const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser')
const queries = require('../queries');

var app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

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

app.post('/test', function (req, res) {
  var name = req.body.url

  connection.query(queries.findQuery(name), function (error, results, fields) {
    if (error) {
      console.log('Error');
    } else {
      console.log('Successful query');
      console.log(results);
      // res.send(results);
    }
  });


});

// this is where you want to access your DB and run queries 


app.listen(8888);