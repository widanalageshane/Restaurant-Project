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

module.exports = {menuRouter};