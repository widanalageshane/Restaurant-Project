const express = require('express');
const { query } = require('../helpers/db.js');
const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
    try {
        const sql = "SELECT * FROM account WHERE email = $1";
        const result = await query(sql, [req.body.email]);
        if (result.rowCount === 1) {
            if (result.rows[0].password === req.body.password) {
                res.status(200).json(result.rows[0]);
            } else {
                res.status(401).json({ error: 'Invalid password' });
            }
        } else {
            res.status(401).json({ error: 'Invalid email' });
        }
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});




userRouter.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const sql = "INSERT INTO account (username, email, password) VALUES ($1, $2, $3) RETURNING id";
        const result = await query(sql, [username, email, password]);
        res.status(200).json({ id: result.rows[0].id });
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});




module.exports = { userRouter };