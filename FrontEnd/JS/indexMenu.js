import { MenuCard } from './CLASS/menucard.js';

const menuCard = new MenuCard('http://localhost:3001');

//1.This is for getPost---- catch the card section div in which we want to add the card divs
const menu_div = document.getElementById("menu_card");


const render_menu = (nodes) => {
           // create 1st div in card section  
           const card_div = menu_div.appendChild(document.createElement('div'));
           card_div.setAttribute('class', 'card');
       // create image part of card
           const img_menu = card_div.appendChild(document.createElement('img'));
           img_menu.setAttribute('class', "card-img-top");
           img_menu.setAttribute('src', nodes.getImage());


       // create a card descpirtion area div
           const class_div =card_div.appendChild(document.createElement('div'));
       
       // create h5 tag for menu name
           const h5 = class_div.appendChild(document.createElement('h5'));
           h5.setAttribute('class', "card-title");
           h5.innerHTML = nodes.getName();

       // create p tag for menu description    
            const p = class_div.appendChild(document.createElement('p'));
            p.setAttribute('class', "card-text");
            p.innerHTML = nodes.getDescription();

        // create p tag for menu price
            const a = class_div.appendChild(document.createElement('a'));
            a.setAttribute('class', "btn btn-primary");
            a.setAttribute('href', "#");
            a.innerHTML = nodes.getPrice();

        // create a tag for like button
            const like = class_div.appendChild(document.createElement('a'));
            const li1 = like.appendChild(document.createElement('li'));
            li1.setAttribute('class', "fa-solid fa-heart");
           

        // create a tag for comment button
            const comment = class_div.appendChild(document.createElement('a'));
            const li2 = comment.appendChild(document.createElement('li'));
            li2.setAttribute('class', "fa-regular fa-comments");

};


const getPosts = () => {
    menuCard.getPosts().then(message =>  {
        console.log(message);
        message.forEach(menus => {
            render_menu(menus);
         
        }).catch(error => {
            alert(error);
        });
    });
} 

//---------------------------getPost() end here- Totally works------------------------------------------




//---------------------------addPost() event listener --------------------------------------------------------------
//2. This is for Post of Menu to databe--- catch the input fileds form admin post page
const input_name = document.getElementById("id_name");
const input_description = document.getElementById("id_description");
const input_price = document.getElementById("id_price");
const input_image = document.getElementById("id_image");
console.log(input_name);

//key press function with above renderTask function.
const button_done = document.getElementById("button_done");


function handleClick() {
//get all input_name, input_description, input_price, input_image values to a variable
    //alert(input_name.value + input_description.value + input_price.value + input_image.value);
    //button_done.innerHTML = "Add Menu";

    const name = input_name.value.trim();
    const description = input_description.value.trim();
    const price = input_price.value.trim();
    const image = input_image.value.trim();
    
    alert(name + description + price + image);
    if(name !== '' && description !== '' && price !== '' && image !== ''){ 
        // add above name, description, price, image to the menuCard array
        menuCard.addPost(name, description, price, image).then((menu) => {
            alert('Menu added successfully');
            //console.log(menu);
            render_menu(menu);
            //alert('Menu added successfully');
            //console.log(menu);
        }).catch((error) => {
            alert(error);
        });
    } else {
        alert('Please fill all the fields');
    }    
        
};
//-----------------------------------------------------------------------------------------
getPosts();