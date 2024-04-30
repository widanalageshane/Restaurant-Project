import { CommentCard } from './CLASS/commentGet.js';


//obtaining the menu_id from the url
const params = new URLSearchParams(window.location.search);
const menu_id =params.get('menu_id')
const menu_name =params.get('menu_name')



//obtaining the account_id from the session storage
const userDataString = sessionStorage.getItem('user');
const userDataObject = JSON.parse(userDataString);
//console.log(userDataObject);
const account_id = userDataObject.account_id;


// fucntion to get username from account_id by fetching from backend as BACKEND_URL+'/user/username/' + id
async function getUsername(id) {
    const response = await fetch('http://localhost:3001/user/username/' + id);
    const json = await response.json();
    return json.username;
  }


//...........................................................................................................................

const commentCard = new CommentCard('http://localhost:3001/comment/'+ menu_id);


//1.This is for getPost---- catch the card section div in which we want to add the card divs
const comment_div = document.getElementById("comment_id");

const span1 = comment_div.appendChild(document.createElement("span"));
span1.innerHTML = "Comments for - ";
span1.setAttribute("class","text-commentfor");
const span2 = span1.appendChild(document.createElement("span"));
span2.innerHTML = menu_name;
span2.setAttribute("class","text-menuName1");

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
// how to get the output of getUsername(account_id) function to a variable called user_name
       const accountId_forUsername = comment.getaccountId();
    //need to write a function to get the username from the account_id from backend "http://localhost:3001/account/username/:account_id"
       getUsername(accountId_forUsername)
       .then((user_name) => {
        h4.innerHTML = "  ~"+user_name;
        h4.setAttribute("class","text-username");
       });
       //;
    
    
    
    

    // create this <span>- 20 October, 2018</span>
    const span = card_div.appendChild(document.createElement("span"));
    span.innerHTML = "  - " + comment.getsaved().substring(0, 10)+ "  Time : " + comment.getsaved().substring(12, 16);
    span.setAttribute("class","text-datetTme");



    // create this "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
    const p = card_div.appendChild(document.createElement('p'));
    p.innerHTML = comment.gettext();
    p.setAttribute("class","text-commentArea");
    

    // const commentMenuName = card_div.appendChild(document.getElementById("p"));
    // commentMenuName.innerHTML = menu_name;

}
        

        
//....................get menu names for admin page............................


const submit_buttn = document.getElementById("submit-button");
const input = document.getElementById("comment_add");


submit_buttn.addEventListener('click', (event) => {
    //alert("New comment added successfully!");

    //if press Enter key then add new task. ("if" for the task not empty)  
            event.preventDefault()
            const comment_add =input.value.trim();
            if (comment_add !== '') {
                commentCard.addComment(comment_add, menu_id, account_id)
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
        message.forEach(comment => {
        rendercomment(comment);           
        })
    });
} 


getComment();

