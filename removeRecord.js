var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'articles'
});
connection.connect();
//var userPrompt = prompt("Enter the number of the record to delete");
connection.query('DELETE FROM articles WHERE ID = ?', [2], function(err, result){
  if(err) throw err;
  console.log('Deleted');
});
