DROP DATABASE IF EXISTS great_bay_db;

CREATE DATABASE great_bay_db;

USE great_bay_db;

CREATE TABLE listings (
  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  lister VARCHAR(45) NOT NULL,
  highest_bidder VARCHAR(45) NOT NULL,
  item_name VARCHAR(100) NOT NULL,
  category VARCHAR(45) NOT NULL,
  initial_bid DECIMAL(10,2) NOT NULL,
  highest_bid DECIMAL(10,2) NOT NULL
);

INSERT INTO listings (lister, highest_bidder, item_name, category, initial_bid, highest_bid)
VALUES ("lister1", "highBidder1", "item1", "category1", 10, 25), ("lister2", "highBidder2", "item2", "category2", 1, 5);

select * from listings