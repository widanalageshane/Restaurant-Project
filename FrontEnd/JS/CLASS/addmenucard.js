import { BACKEND_URL } from '../config.js';
import { Menu } from './menu.js';

//const BACKEND_URL = 'http://localhost:3001'

class MenuCardAdd{
    #menuCard = []
    #backend_url =' '

    constructor(url) {
        this.#backend_url = url;
    }
    


    //--------------------addpost to database from admin page start here ------------------------------------------------------- 

    //adding new post to the database
    async addPost(formData) {

            //const json = ({menu_name: formData.menu_name, menu_description: formData.menu_description, price: formData.price, image_name: formData.image_name});
            const response = await fetch(this.#backend_url+ '/new', 
            {
                method: 'post',
                body: formData
            });

            //console.log(response);

            if (response.ok === true) {
                const json = await response.json();
                //console.log(json);
                return this.#addToArray(json.id, json.menu_name, json.menu_description, json.price, json.image_name);
            } else {
                throw response.statusText;
            }

    }

    // add new task to the array  
    #addToArray = (menu_id, menu_name, menu_description, price, image_name) => {
        const menu = new Menu(menu_id, menu_name, menu_description, price, image_name);
        this.#menuCard.push(menu);
        return menu;
    }



    // -------------------remove task from database start here------------------------------------------------------------
    
    // removeTask = (id) => {
    //     return new Promise( async(resolve, reject) => {
    //         fetch(this.#backend_url + '/delete/' + id, {
    //             method: 'delete'
    //         })
    //         .then((response) => response.json())
    //         .then(json => {
    //             this.#removeFromArray(id);
    //             resolve(id);  //json.id
    //         }, (error) => {
    //             reject(error);
    //         });
    //     });
    // }

    // #removeFromArray = (id) => {
    //     const arrayWithoutRemoved = this.#menuCard.filter(task => task.menu_id !== id);
    //     this.#menuCard = arrayWithoutRemoved;
    // }


}

export { MenuCardAdd };