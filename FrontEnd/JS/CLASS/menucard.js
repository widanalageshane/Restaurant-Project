//import { url } from '../config.js';

import { Menu } from './menu.js';
//import { BACKEND_URL } from '../config.js';
//const BACKEND_URL = 'http://localhost:3001'


class MenuCard {
    #menuCard = []
    #backend_url =' '

    constructor(url) {
        this.#backend_url = url;
    }

//--------------------Getpost from database totally works-----------------------------------------------------------    
// show all menus in the web page from database
    getPosts = () => {
        
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url)
            .then(response => response.json())
            .then(json => {
                this.#readJson(json);  
                resolve(this.#menuCard);

            }),(error) => {
                reject(error);
            };
        });
    }
// go through json resopnd from backend and push each item to a class of Menu (into menuCard array)
    #readJson = (json) =>{
        json.forEach(node => {
            const menu = new Menu(node.menu_id, node.menu_name, node.menu_description, node.price, node.image_name);
            this.#menuCard.push(menu);
        });
    }





    //--------------------addpost to database from admin page start here ------------------------------------------------------- 

// // adding new post to the database
//     addPost =(menu_name, menu_description, price, image_path) => {
//         return new Promise( async(resolve, reject) => {
//             const json = JSON.stringify({menu_name: menu_name, menu_description: menu_description, price: price, image_path: image_path});
//             fetch(this.#backend_url + '/new', {
//                 method: 'post',
//                 headers: {'Content-Type': 'application/json'},
//                 body: json
//              })
//             .then((response) => response.json())
//             .then((json) => {
//                 resolve(this.#addToArray(json.id, menu_name, menu_description, price, image_path));
//             },(error) => {
//                 reject(error);
//             });
//         });
//     }

//  // add new task to the array  
//     #addToArray = (menu_id, menu_name, menu_description, price, image_path) => {
//         const menu = new Menu(menu_id, menu_name, menu_description, price, image_path);
//         this.#menuCard.push(menu);
//         return menu;
//     }



 // -------------------remove task from database start here------------------------------------------------------------
    
    removeTask = (id) => {
        return new Promise( async(resolve, reject) => {
            fetch(this.#backend_url + '/delete/' + id, {
                method: 'delete'
            })
            .then((response) => response.json())
            .then(json => {
                this.#removeFromArray(id);
                resolve(id);  //json.id
            }, (error) => {
                reject(error);
            });
        });
    }

    #removeFromArray = (id) => {
        const arrayWithoutRemoved = this.#menuCard.filter(task => task.menu_id !== id);
        this.#menuCard = arrayWithoutRemoved;
    }


}

export { MenuCard };