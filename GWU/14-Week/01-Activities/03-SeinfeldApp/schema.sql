DROP DATABASE IF EXISTS seinfeld_db;

CREATE DATABASE seinfeld_db;

USE seinfeld_db;

CREATE TABLE actors (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  coolness_points INT NOT NULL,
  attitudes VARCHAR(45),
  PRIMARY KEY (id)
);

INSERT INTO actors (name, coolness_points, attitudes)
VALUES ("Jerry", 90, "Funny");

INSERT INTO actors (name, coolness_points, attitudes)
VALUES ("George", 55, "Lame");

INSERT INTO actors (name, coolness_points, attitudes)
VALUES ("Kramer", 67, "Weird");

INSERT INTO actors (name, coolness_points, attitudes)
VALUES ("Elaine", 85, "Spontaneous");

SELECT * FROM actors;