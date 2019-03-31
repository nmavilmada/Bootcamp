DROP DATABASE IF EXISTS playlist_db;
CREATE DATABASE playlist_db;
USE playlist_db;

CREATE TABLE songs(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NULL,
  artist VARCHAR(50) NULL,
  genre VARCHAR(50) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Human", "Krewella", "Dance");

INSERT INTO songs (title, artist, genre)
VALUES ("TRNDSTTR","Black Coast", "Dance");

INSERT INTO songs (title, artist, genre)
VALUES ("Who's Next", "The Who", "Classic Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("Yellow Submarine", "The Beatles", "Classic Rock");

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'