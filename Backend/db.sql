create database Restaurant;

use Restaurant;

create table menu(
    menu_id serial primary key,
    menu_name varchar(255) not null,
    menu_description varchar(255) not null,
    price varchar(255) not null,
    image_name varchar(100)
);

insert into menu(menu_name, menu_description, price, image_name) values('Menu Name One ', 'Some quick example text to build on the 
																		card title and make up the bulk of the card content.', 'Price 10 € ', 'menucard1.png');
insert into menu(menu_name, menu_description, price, image_name) values('Menu Name Two', 'Some quick example text to build on the 
																		card title and make up the bulk of the card content.', 'Price 15 € ', 'menucard2.png');
insert into menu(menu_name, menu_description, price, image_name) values('Menu Name Three', 'Some quick example text to build on the
                                    card title and make up the bulk of the card content.', 'Price 20 € ', 'menucard3.png');
insert into menu(menu_name, menu_description, price, image_name) values('Menu Name Four', 'Some quick example text to build on the
                                    card title and make up the bulk of the card content.', 'Price 30 € ', 'menucard4.png');                                  
		
select * from menu;


/////// please add your other databses below this line.

-  user table

create table account (
	account_id serial primary key,
	username varchar(100) unique not null,
	email varchar(100) unique not null,
	password varchar(255) not null
);

insert into account(username,email,password) values ('Admin','admin@gmail.com','admin123');
insert into account(username,email,password) values ('userone','user1@gmail.com' , 'user1');
insert into account(username,email,password) values ('usertwo','user2@gmail.com','user2');





-  comment table

create table comment (
  comment_id serial primary key,
  comment_text text not null,
  saved timestamp default current_timestamp,
  menu_id int not null,
    constraint fk_menu
      foreign key (menu_id)
        references menu(menu_id),
  account_id int not null,
    constraint fk_account
      foreign key (account_id)
        references account(account_id)
)

insert into comment(comment_text,menu_id,account_id) values ('Wow Its really nice menu, I really like It. Need Much more menues from you',1,2);
insert into comment(comment_text,menu_id,account_id) values ('Wow Its really nice menu, I really like It. Need Much more menues from you',2,1);



- like table

CREATE TABLE like_count (
    like_id SERIAL PRIMARY KEY,
    menu_id INT NOT NULL,
    account_id INT NOT NULL,
    CONSTRAINT fk_menu FOREIGN KEY (menu_id) REFERENCES menu(menu_id),
    CONSTRAINT fk_account FOREIGN KEY (account_id) REFERENCES account(account_id),
    UNIQUE (menu_id, account_id)
);

