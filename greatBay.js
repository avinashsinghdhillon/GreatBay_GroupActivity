var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Cain1099##",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

});

  
  ]).then (function updateBid() {
    var query = connection.query(
      "What item do you want to bid ?",
      [
        {
          highest_bid: 
        }
      ],
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " bid updated!\n");
      }
    );

    // logs the actual query being run
    console.log(query.sql);
});