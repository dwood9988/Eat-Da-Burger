// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "tccrxdrr0j6c1y1l",
  password: "r6tlk5a3xib35zt3",
  database: "gslrhc7dc3nm4v0v"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
