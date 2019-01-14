// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "m7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ws1h5c55hougzc0v",
  password: "kzcm9m998s1vhd2p",
  database: "p3tug7e9i35qmj3s"
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
