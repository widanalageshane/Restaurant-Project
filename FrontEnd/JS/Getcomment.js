import { CommentCard } from './CLASS/commentGet.js';

const commentCard = new CommentCard('http://localhost:3001/comment');

//1.This is for getPost---- catch the card section div in which we want to add the card divs
const comment_div = document.getElementById("comment_id");


//............................................render menu name only for delete in ADMIN page
const rendercomment = (comment) => {
    // create 1st div in card section 
    const card_div = comment_div.appendChild(document.createElement("div"));
    card_div.setAttribute("class", "comment mt-4 text-justify float-left");
    // creater all these, <img src="./Images/chat.jpg" alt="" class="rounded-circle" width="30" height="30">
    const img = card_div.appendChild(document.createElement("img"));
    img.setAttribute("src", "./Images/chat.png");
    img.setAttribute("class","rounded-circle");
    img.setAttribute("width","30");
    img.setAttribute("height","30");

    // create this <h4>Jhon Doe</h4>
    const h4 = card_div.appendChild(document.createElement("h4"));
    h4.innerHTML = "  _Raniiiiiil ";

    // create this <span>- 20 October, 2018</span>
    const span = card_div.appendChild(document.createElement("span"));
    span.innerHTML = "  - " + comment.getsaved().substring(0, 10)+ "  Time : " + comment.getsaved().substring(12, 16);



    // create this "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
    const p = card_div.appendChild(document.createElement('p'));
    p.innerHTML = comment.gettext();

}
        

        
//....................get menu names for admin page............................


const submit_buttn = document.getElementById("submit-button");
const input = document.getElementById("comment_add");


submit_buttn.addEventListener('click', (event) => {
    alert("submit button is clicked");

    //if press Enter key then add new task. ("if" for the task not empty)  
            event.preventDefault()
            const comment_add =input.value.trim();
            if (comment_add !== '') {
                //add "comment_add,saved,menu_id, account_id" to the commentCard array database
                //const comment_save = JSON.stringify({comment_text: comment_add, menu_id:"74" , account_id: "1" });
                commentCard.addComment(comment_add)
                //render the comment to the web page
                .then((comment) => {
                    input.value = '';
                    rendercomment(comment);
                    input.value = '';
                    
                }).catch((error) => {
                    alert(error);
                });
            }
    });


//---------------------------getcomment() end here- Totally works------------------------------------------
const getComment = () => {
    commentCard.getComment()
    .then(message =>  {
    //console.log(message);
    message.forEach(message => {
        rendercomment(message);
                 
    })
});
} 


getComment();
