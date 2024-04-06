class Menu {
    #menu_id
    #menu_name 
    #menu_description 
    #price 
    #image_path

    constructor(menu_id, menu_name, menu_description, price, image_path) {
        this.#menu_id = menu_id;
        this.#menu_name = menu_name;
        this.#menu_description = menu_description;
        this.#price = price;
        this.#image_path = image_path;
    }

    getId() {
        return this.#menu_id;
    }

    getName() {
        return this.#menu_name;
    }

    getDescription() {
        return this.#menu_description;
    }

    getPrice() {
        return this.#price;
    }

    getImage() {
        return this.#image_path;
    }   
}

export { Menu };