var prompt = require('prompt');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zoo_db'
});

connection.connect(function(err) {
  if (err) {
      console.error('error connecting: ' + err.stack);
      return;
  };
  console.log('connected as id ' + connection.threadId);
});
 
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows[0].solution);
});
 
connection.end();


prompt.start();

prompt.message = "";




