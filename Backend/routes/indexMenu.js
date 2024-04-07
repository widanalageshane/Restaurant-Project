const express = require('express');

const { query } = require('../helpers/db.js');

const menuRouter = express.Router();




menuRouter.get("/", async (req, res) => {
    try {
        const result = await query ('SELECT * FROM menu');
        const raws = result.rows ? result.rows : [];
        res.status(200).json(raws);

    } catch (error) {
        res.statusMessage = error;
        res.status(500).json({ error: error });
    }
});

menuRouter.post("/add", async (req, res) => {
    try {
        const result = await query('INSERT INTO menu(menu_name, menu_description, price, image_path) VALUES ($1, $2, $3, $4) RETURNING *', 
        [req.body.menu_name, req.body.menu_description, req.body.price, req.body.image_path]);
        res.status(200).json({ id: result.rows[0].id});

    } catch (error) {
        console.log(error);
        res.statusMessage = error;
        res.status(500).json({ error: error });
    }
});


module.exports = {menuRouter};