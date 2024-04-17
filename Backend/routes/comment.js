const express = require('express');

const { query } = require('../helpers/db.js');

const commentRouter = express.Router();


//.............................................. for the comments...................

commentRouter.get("/", async (req, res) => {
    try {
        const result = await query ('SELECT * FROM comment');
        const raws = result.rows ? result.rows : [];
        res.status(200).json(raws);

    } catch (error) {
        res.statusMessage = error;
        res.status(500).json({ error: error });
    }
});


commentRouter.post("/new", async (req, res) => {
    try {
        const sql = 'insert into comment(comment_text,menu_id,account_id) values ($1,$2,$3) returning *'
        const result = await query(sql, [req.body.comment_text, req.body.menu_id, req.body.account_id]);
        res.status(200).json(result.rows[0]);

    } catch (error) {
        res.statusMessage = error;
        res.status(500).json({ error: error });
    }
})

module.exports = {commentRouter};