var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'articles'
});
connection.connect();

var article = {
  author: "Unknown Author",
  title: "Node and Mysql Stuffs part 2",
  body: 'Text for testing'
};

var query = connection.query('insert into articles set ?', article, function(err, result){
  if (err){
    console.error(err);
    return;
  }
  console.error(result);
});
