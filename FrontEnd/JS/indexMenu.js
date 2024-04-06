import { MenuCard } from './CLASS/menucard.js';

const menuCard = new MenuCard('http://localhost:3001');

// catch the card section div in which we want to add the card divs
const menu_div = document.getElementById("menu_card");

const getPosts = () => {
    menuCard.getPosts().then(message =>  {
        console.log(message);
        message.forEach(nodes => {

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


        }).catch(error => {
            alert(error);
        });
    });
} 

getPosts();