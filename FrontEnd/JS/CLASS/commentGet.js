//import { url } from '../config.js';

import { Comment } from './comment.js';
//import { BACKEND_URL } from '../config.js';
//const BACKEND_URL = 'http://localhost:3001'


class CommentCard {
    #commentCard = []
    #backend_url =' '

    constructor(url) {
        this.#backend_url = url;
    }

//--------------------Getpost from database totally works-----------------------------------------------------------    
    addPost(text) {

        return new Promise( async(resolve, reject) => {
            const json = JSON.stringify({description: text});
            fetch(this.#backend_url + '/comment/new', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: json
             })
            .then((response) => response.json())
            .then((json) => {
                resolve(this.#addToArray(json.comment_id, json.comment_text));
            },(error) => {
                reject(error);
            });
        });
    }

    // add new task to the array  
    #addToArray = (comment_id, comment_text) => {
    const comment = new Comment(comment_id, comment_text);
    this.#commentCard.push(comment);
    return comment;
    }


// show all menus in the web page from database
    getPosts = () => {
        
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url+ '/comment')
            .then(response => response.json())
            .then(json => {
                this.#readJson(json);  
                resolve(this.#commentCard);

            }),(error) => {
                reject(error);
            };
        });
    }
// go through json resopnd from backend and push each item to a class of Menu (into menuCard array)
    #readJson = (json) =>{
        json.forEach(node => {
            const comment = new Comment(node.comment_id, node.comment_text);
            this.#commentCard.push(comment);
        });
    
    }
}

export { CommentCard };