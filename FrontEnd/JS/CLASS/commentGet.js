import { Comment } from './comment.js';


class CommentCard {
    #commentCard = []
    #backend_url =' '

    constructor(url) {
        this.#backend_url = url;
    }

//--------------------Getpost from database totally works-----------------------------------------------------------    
// show all menus in the web page from database
    getComment = () => {
            
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url)
            .then(response => response.json())
            .then(json => {
                //console.log(json);
                this.#readJson(json);
                //console.log(this.#commentCard);  
                resolve(this.#commentCard);

            }),(error) => {
                reject(error);
            };
        });
    }
    // go through json resopnd from backend and push each item to a class of Menu (into menuCard array)
    #readJson = (json) =>{
        json.forEach(node => {
            const comment = new Comment(node.comment_id, node.comment_text, node.saved, node.menu_id, node.account_id);
            this.#commentCard.push(comment);
        });
    }
  
//.....................add comment to database from user page start here...............................................
    addComment(text, menu_id, account_id) {


        return new Promise( async(resolve, reject) => {
            const json = JSON.stringify({comment_text: text, menu_id: menu_id, account_id: account_id });
            fetch('http://localhost:3001/comment'+ '/new',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: json
             })
            .then((response) => response.json())
            .then((json) => {
                resolve(this.#addToArray(json.comment_id, text, json.saved, menu_id, account_id));
            },(error) => {
                reject(error);
            });
        });
    }

    // add new task to the array  
    #addToArray = (comment_id, comment_text, saved, menu_id, account_id) => {
    const comment = new Comment(comment_id, comment_text, saved, menu_id, account_id);
    this.#commentCard.push(comment);
    return comment;
    }


    

}  

export { CommentCard };