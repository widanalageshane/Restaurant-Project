import { CommentCard } from './CLASS/commentGet.js';

const commentCard = new CommentCard('http://localhost:3001');

//1.This is for getPost---- catch the card section div in which we want to add the card divs
const comment_div = document.getElementById("comment_id");


//............................................render menu name only for delete in ADMIN page
const render_menu_Dname = (text) => {
    // create 1st div in card section 
    const card_div = comment_div.appendChild(document.createElement("div"));
    card_div.setAttribute("class", "comment mt-4 text-justify float-left");
    // creater all these, <img src="./Images/chat.jpg" alt="" class="rounded-circle" width="30" height="30">
    const img = card_div.appendChild(document.createElement("img"));
    img.setAttribute("src", "./Images/chat.jpg");
    img.setAttribute("class","rounded-circle");
    img.setAttribute("width","30");
    img.setAttribute("height","30");

    // create this <h4>Jhon Doe</h4>
    const h4 = card_div.appendChild(document.createElement("h4"));
    h4.innerHTML = "Raniiiiiil";

    // create this <span>- 20 October, 2018</span>
    const span = card_div.appendChild(document.createElement("span"));
    span.innerHTML = "- 20 October, 2018";



    // create this "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
    const p = card_div.appendChild(document.createElement('p'));
    p.innerHTML = text;

}
        

        
//....................get menu names for admin page............................
const getPosts = () => {
        commentCard.getPosts().then(message =>  {
        //console.log(message);
        message.forEach(menus => {
        render_menu_Dname(menus);
                     
        })
    });
} 

const submit_buttn = document.getElementById("submit-button");
const input = document.getElementById("comment_add");


submit_buttn.addEventListener('click', (event) => {

    //if press Enter key then add new task. ("if" for the task not empty)  
            event.preventDefault()
            const task =input.value.trim();
            console.log(task);
            if (task !== '') {
                //addtask or (savetask in 3 pdf)
                commentCard.add(task).then((task) => {
                    renderTask(task);
                    input.value ='';
                    
                })
            }
    });


//---------------------------getPost() end here- Totally works------------------------------------------

getPosts();
