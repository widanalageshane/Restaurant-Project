create database Restaurant;

use Restaurant;

create table menu(
    menu_id serial primary key,
    menu_name varchar(255) not null,
    menu_description varchar(255) not null,
    price varchar(255) not null,
    image_name varchar(100)
);

insert into menu(menu_name, menu_description, price, image_name) values('Menu Name From DB 1', 'Some quick example text to build on the 
																		card title and make up the bulk of the card content.', 'Price 10 € ', 'menucard1');
		
select * from menu;


/////// please add your other databses below this line.

-  user table

create table account (
	id serial primary key,
	username varchar(100) unique not null,
	email varchar(100) unique not null,
	password varchar(255) not null
);

insert into account(username,email,password) values ('userone','user1@gmail.com' , 'user1');
insert into account(username,email,password) values ('usertwo','user2@gmail.com','user2');
insert into account(username,email,password) values ('userthree','user3@gmail.com','user3');




-  comment table
-  like table    /////////
