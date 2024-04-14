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
database name is Restaurant
-  user table
-  comment table
-  like table    /////////
