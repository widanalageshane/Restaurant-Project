import { Menu } from './menu.js';

class MenuCard {
    #menuCard = []
    #backend_url =' '

    constructor(url) {
        this.#backend_url = url;
    }

    getPosts = () => {
        return new Promise((resolve, reject) => {
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




    #readJson = (json) =>{
        json.forEach(node => {
            const menu = new Menu(node.menu_id, node.menu_name, node.menu_description, node.price, node.image_path);
            this.#menuCard.push(menu);
        });
    }



    renderTask() {
        


    }

}

export { MenuCard };