create database Restaurant;

use Restaurant;

create table menu(
    menu_id serial primary key,
    menu_name varchar(255) not null,
    menu_description varchar(255) not null,
    price varchar(255) not null,
    image_path varchar(255) not null
);

insert into menu(menu_name, menu_description, price, image_path) values('Menu Name From DB 1', 'Some quick example text to build on the 
																		card title and make up the bulk of the card content.', 'Price 10 € ', 'Images/menucard1.jpg');
insert into menu(menu_name, menu_description, price, image_path) values('Menu Name From DB 2', 'Some quick example text to build on the 
																		card title and make up the bulk of the card content', 'Price 20 € ', 'Images/menucard4.png');
insert into menu(menu_name, menu_description, price, image_path) values('Menu Name From DB 3', 'Some quick example text to build on the 
																		card title and make up the bulk of the card content', 'Price 15 € ', 'Images/menucard3.jpg');
insert into menu(menu_name, menu_description, price, image_path) values('Menu Name From DB 4', 'Some quick example text to build on the 
																		card title and make up the bulk of the card content', 'Price 18 € ', 'Images/menucard2.png');
insert into menu(menu_name, menu_description, price, image_path) values('Menu Name From DB 5','Some quick example text to build on the 
																		card title and make up the bulk of the card content', 'Price 10 € ', 'Images/menucard5.png');
insert into menu(menu_name, menu_description, price, image_path) values('Menu Name From DB 6', 'Some quick example text to build on the 
																		card title and make up the bulk of the card content', 'Price 15 € ', 'Images/menucard6.jpg');
insert into menu(menu_name, menu_description, price, image_path) values('Menu Name From DB 7', 'Some quick example text to build on the 
																		card title and make up the bulk of the card content', 'Price 08 € ', 'Images/menucard7.png');
insert into menu(menu_name, menu_description, price, image_path) values('Menu Name From DB 8', 'Some quick example text to build on the 
																		card title and make up the bulk of the card content', 'Price 16 € ', 'Images/menucard8.jpg');
select * from menu;


/////// please add your other databses below this line.
database name is Restaurant
-  user table
-  comment table
-  like table    /////////
