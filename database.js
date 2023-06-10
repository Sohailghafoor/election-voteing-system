var mysql = require('mysql');
// var conn = mysql.createConnection({
//   host: 'localhost', // assign your host name
//   user: 'root',      //  assign your database username
//   password: 'Bigb@ng12345',      // assign your database password
//   database: 'testdb' // assign database Name
// }); 
var conn = mysql.createConnection('mysql://root:Bigb@ng12345@localhost:3306/election');

conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;