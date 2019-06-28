var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Shiso*ume9",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

});


// Created a series of questions
inquirer.prompt([

    {
      type: "input",
      name: "name",
      message: "What's your name ?"
    },
  
    {
      type: "list",
      name: "items",
      message: "What items do you want to bid ?",
      choices: ["item1", "item2", "item3"]
    },
  
    {
      type: "input",
      name: "bid",
      message: "How much do you want to bid ?"
    }
  
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