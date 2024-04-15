class Comment {
    #comment_id
    #comment_text 

    constructor(comment_id, comment_text) {
        this.#comment_id = comment_id;
        this.#comment_text = comment_text;

    }

    getId() {
        return this.#comment_id;
    }

    gettext() {
        return this.#comment_text;
    }
}
export { Comment };