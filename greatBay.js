var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

});


function updateBid() {

    if(bid > highest_bid) {
        highest_bid = bid;
    } else {
        console.log("The bid is too low, try it next time!")
    }
        function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " bid updated!\n");
        }
    );

    // logs the actual query being run
    console.log(query.sql);
};