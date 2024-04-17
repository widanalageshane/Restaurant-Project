class Comment {
    #comment_id
    #comment_text
    #saved
    #menu_id
    #account_id 

    constructor(comment_id, comment_text, saved, menu_id, account_id) {
        this.#comment_id = comment_id;
        this.#comment_text = comment_text;
        this.#saved = saved;
        this.#menu_id = menu_id;
        this.#account_id = account_id;

    }

    getId() {
        return this.#comment_id;
    }

    gettext() {
        return this.#comment_text;
    }

    getsaved() {
        return this.#saved;
    }

    getmenuId() {
        return this.#menu_id;
    }

    getaccountId() {
        return this.#account_id;
    }
}
export { Comment };