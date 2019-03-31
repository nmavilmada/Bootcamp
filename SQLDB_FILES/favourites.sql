CREATE DATABASE favourite_db;

CREATE TABLE favorite_foods(
 food VARCHAR(50) NOT NULL,
 score INTEGER(10)
 );
 
 CREATE TABLE favorite_songs(
 song VARCHAR(100) NOT NULL,
 artist VARCHAR(50),
 score INTEGER
);

CREATE TABLE favourite_movies(
id integer NOT NULL auto_increment,
movie VARCHAR(10) NOT NULL,
five_times  boolean default false,
score INTEGER(10),
primary key(id)
);

SELECT * FROM favorite_foods;

INSERT INTO favorite_foods(food,score)
values("fish",10);

SELECT * FROM favorite_songs;
INSERT INTO SELECT * FROM favorite_foods;


