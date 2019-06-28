DROP DATABASE IF EXISTS great_bay_db;

CREATE DATABASE great_bay_db;

USE great_bay_db;

CREATE TABLE listings (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  bidder-name VARCHAR(45) NOT NULL,
  item-name VARCHAR(100) NOT NULL,
  initial-bid DECIMAL(10,2) NOT NULL,
  highest-bid DECIMAL(10,2) NOT NULL
);