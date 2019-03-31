CREATE DATABASE animals2_db;

USE animals2_db;

CREATE TABLE people2(
name2 VARCHAR(30) NOT NULL,
has_pet2 boolean not null,
pet_name2 VARCHAR(30),
pet_age2 INTEGER(10)
);

select * from people2;

INSERT INTO people2(name2,has_pet2,pet_name2,pet_age2)
VALUES("x",TRUE,"TOBY",3
);


update people2

 SET name2 = "MAX"
where name2 = "x";
select * from people2;
