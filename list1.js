
  // function to handle listing new items up for auction
  // This is MY module, the rest is test..
  function listAuction() {
    // prompt for info about the item being put up for auction
    inquirer
      .prompt([
        {
          name: "lister",
          type: "input",
          message: "What is the your name?"
        },
        {
          name: "item_name",
          type: "input",
          message: "What is the item you would like to put up for auction?"
        },
        {
          name: "category",
          type: "input",
          message: "What category would you like to place your auction in?"
        },
        {
          name: "initial_Bid",
          type: "input",
          message: "What would you like your starting bid to be?",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function(answer) {
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          "INSERT INTO listings SET ?",
          {
            lister: answer.lister,
            item_name: answer.item_name,
            category: answer.category,
            initial_bid: answer.initial_Bid,
            highest_bid: answer.initial_Bid
          },
          function(err) {
            if (err) throw err;
            console.log("Your auction was created successfully!");
            // re-prompt the user for if they want to bid or post
            start();
          }
        );
      });
  }
  
 