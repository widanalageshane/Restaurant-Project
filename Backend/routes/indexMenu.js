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

menuRouter.post("/new", async (req, res) => {
    try {
        const { menu_name, menu_description, price, image_path } = req.body;
        //const sql= 'INSERT INTO menu(menu_name, menu_description, price, image_path) VALUES ($1, $2, $3, $4) RETURNING *';
        const result = await query('INSERT INTO menu(menu_name, menu_description, price, image_path) VALUES ($1, $2, $3, $4) RETURNING *', 
        [menu_name, menu_description, price, image_path]);

         res.status(200).json({id: result.rows[0].menu_id});


    } catch (error) {
        res.statusMessage = error;
        res.status(500).json({ error: error });
    }
});

menuRouter.delete("/delete/:id", async (req, res) => {
    const id = Number(req.params.id);    
    try {
        //const sql= 'DELETE FROM menu WHERE menu_id = $1';
        const result = await query('delete from menu where menu_id = $1', [id]);

        res.status(200).json({id:id});


    } catch (error) {
        res.statusMessage = error;
        res.status(500).json({ error: error });
    }
});

module.exports = {menuRouter};