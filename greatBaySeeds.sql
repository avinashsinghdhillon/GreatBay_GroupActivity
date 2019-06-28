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