// Set up MySQL connection.
var mysql = require("mysql");

var connection;
/*I have added this condtional here to decide which
 connection we are going to use. The process is outlined in the 
 deployment guide we have in the class repo.
 MYSQLHerokuDeploymentProcess.pdf 
 */ 
if(process.env.JAWSDB_URL){
  //Look to see if we are on heroku..
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{ 
//If not .. use the local connection
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});
}
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
