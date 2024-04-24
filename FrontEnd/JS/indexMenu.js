
import { MenuCard } from './CLASS/menucard.js';
import { BACKEND_URL } from './config.js'
import { getLikeCount, addLike, getCommentCount } from './functionLikeComment.js';

//const BACKEND_URL = 'http://localhost:3001'
const menuCard = new MenuCard(BACKEND_URL);

//1.This is for getPost---- catch the card section div in which we want to add the card divs
const menu_div = document.getElementById("menu_card");

//obtaining the current logged "account_id" from the session storage................
const userDataString = sessionStorage.getItem('user');
const userDataObject = JSON.parse(userDataString);
//console.log(userDataObject);
//const account_id = userDataObject.account_id;
if (userDataString !== null) {
    const userDataObject = JSON.parse(userDataString);
    const account_id = userDataObject.account_id;
} else {
    const account_id = null;
};





 

//.................render_menu function...............................................
const render_menu = (nodes) => {
           // create 1st div in card section  
           const card_div = menu_div.appendChild(document.createElement('div'));
           card_div.setAttribute('class', 'card');


    //................. create image part of ................................................
            const img_menu = card_div.appendChild(document.createElement('img'));
            img_menu.setAttribute('class', "card-img-top");
            img_menu.setAttribute('alt', "menu image");
        //    //http://localhost:3001/images/placeholder.png
            //console.log(nodes.image_name.name);
            img_menu.src = BACKEND_URL + '/images/' + nodes.getImage();
            //Console.log(nodes);
           //img_menu.setAttribute('src', nodes.getImage());


       // create a card descpirtion area div
            const class_div =card_div.appendChild(document.createElement('div'));
       
//.............. create h5 tag for menu name........................
            const h5 = class_div.appendChild(document.createElement('h5'));
            h5.setAttribute('class', "card-title");
            h5.innerHTML = nodes.getName();

//............ create p tag for menu description....................    
            const p = class_div.appendChild(document.createElement('p'));
            p.setAttribute('class', "card-text");
            p.innerHTML = nodes.getDescription();

//......... create p tag for menu price......................
            const a = class_div.appendChild(document.createElement('a'));
            a.setAttribute('class', "btn btn-primary");
            a.setAttribute('href', "#");
            a.innerHTML = nodes.getPrice();


   //..........ceate like button............................................
            const likeButton = class_div.appendChild(document.createElement('button'));
            likeButton.setAttribute('class', 'btn-like');
            getLikeCount(nodes.getId())
            .then((likejson) => {
                likeButton.innerHTML = `<i class="fa-solid fa-heart"></i><span class="like-count">${likejson.count}</span>`;
            });
            // on click function for adding comment, 1st.change the color of the like button,2nd.get current menu_id and account_id 3rd. increase the like count
            likeButton.addEventListener('click', () => {
                likeButton.classList.toggle('liked');
                const menu1_id = nodes.getId();
                addLike(menu1_id, userDataObject.account_id)
                .then(() => {
                    getLikeCount(nodes.getId())
                    .then((likejson2) => {
                        likeButton.innerHTML = `<i class="fa-solid fa-heart"></i><span class="like-count">${likejson2.count}</span>`;
                    });
                });
            });
            //get current menu_id and account_id 


    
  //.......... create comment button...................................................
            const comment = class_div.appendChild(document.createElement('a'));
            const li2 = comment.appendChild(document.createElement('li'));
            li2.setAttribute('class', "fa-regular fa-comments");
            getCommentCount(nodes.getId())
            .then((commentjson) => {
                li2.innerHTML = `<span class="comment-count">${commentjson.count}</span>`;
            });
            
            li2.addEventListener('click', () => {
                //get both menu_id and mrnu_name with FeedBack.hyml
                window.location.href = 'FeedBack.html?menu_id=' + nodes.getId() + '&menu_name=' + nodes.getName();

            });
            //li2 'class' set to "fa-regular fa-comments"and 'click links"FeedBack.html");

            //li2.addEventListener('click', => {window.location.href = 'FeedBack.html';
            //});

            
};


const getPosts = () => {
    menuCard.getPosts().then(message =>  {
        console.log(message);
        message.forEach(menus => {
            render_menu(menus);
                     
        })
    });
} 
            


//---------------------------getPost() end here- Totally works------------------------------------------

// need to load the menu only if the user is logged in
if (userDataObject !== null) {
    getPosts();
} else {
    //alert("You have to logging to view the menu");
    const card_div = menu_div.appendChild(document.createElement('div'));
    card_div.setAttribute('class', 'cardnotLoging');
    const class_div =card_div.appendChild(document.createElement('div'));
    const h5 = class_div.appendChild(document.createElement('h5'));
    h5.setAttribute('class', "card-error_notlogin");
    h5.innerHTML = "You have to login to view the menu";
}
