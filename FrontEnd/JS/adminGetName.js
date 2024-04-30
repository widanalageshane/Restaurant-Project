import { MenuCard } from './CLASS/menucard.js';

const menuCard = new MenuCard('http://localhost:3001');

//1.This is for getPost---- catch the card section div in which we want to add the card divs
const menu_list = document.getElementById("list");


//............................................render menu name only for delete in ADMIN page
const render_menu_Dname = (task) => {
    // create 1st div in card section  
    const li = menu_list.appendChild(document.createElement("li"));
    li.setAttribute('class','list-group-item')
    renderSpan(li,task.getName());
    renderLink(li,task.getId());

}

// render menu name only for delete in ADMIN page
const renderSpan = (li, text) => {
    const span = li.appendChild(document.createElement('span'));
    span.innerHTML = text;        
}
        

const renderLink = (li, id) => {
    // creating ----deletie icon --- in admin page menu items
    const a = li.appendChild(document.createElement('a'));
    a.innerHTML = '<i id="delete_icon" class="fas fa-trash-alt">';

    // -----------deleting function------ in admin page menu items
    a.addEventListener('click', async (event) => {
        try {
            await menuCard.removeTask(id);
            //alert("Menu Deleted Successfully!");
            //need to refres the page to see the changes
            window.location.href="AdminPost.html"

        } catch (error) {
            alert(error);
        }
    });
   // });
            
}

        
//....................get menu names for admin page............................
const getPosts = () => {
        menuCard.getPosts().then(message =>  {
        //console.log(message);
        message.forEach(menus => {
        render_menu_Dname(menus);
                     
        })
    });
} 
            


//---------------------------getPost() end here- Totally works------------------------------------------

getPosts();
