var mysql = require("mysql");


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


function updateBid() {

    if(bid > highest_bid) {
        highest_bid = bid;
    }
        function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " bid updated!\n");
        }
    );

    // logs the actual query being run
    console.log(query.sql);
};