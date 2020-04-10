const mysql = require('mysql');

const connection = mysql.createConnection({
  user: "root",
  password: "root",
  port: 3306,
  host: "localhost",
  database: "nintendo"
})

connection.connect(function(err){
  if(err) throw err;

  console.log("Success")
})

module.exports = connection;