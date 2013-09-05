var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'staging',
  password : 'staging',
  database : 'staging1'
});

connection.connect();

module.exports = connection;
