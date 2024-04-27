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
    //console.log(req.body);
    console.log(req.files);
    let image_name = '';
    
    try {
        // upload the image to the server................
        // if req. have a image file, want to upload a image file to the server "`./public/images/${image_name}` location"
        if (req.files) {
            const file = req.files.image_name;
            image_name = file.name;
            const uploadPath = `./public/images/${file.name}`;
            file.mv(uploadPath,(err) => {
                if (err) {
                    throw new Error(err);
                }
            });
        }
//....................
        const {menu_name, menu_description, price} = req.body;
        //const sql= 'INSERT INTO menu(menu_name, menu_description, price, image_path) VALUES ($1, $2, $3, $4) RETURNING *';
        const result = await query('INSERT INTO menu(menu_name, menu_description, price, image_name) VALUES ($1, $2, $3, $4 ) RETURNING *', 
        [menu_name, menu_description, price, image_name]);

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
        
        const result1 = await query('delete from comment where menu_id = $1', [id]);
        const result2 = await query('delete from like_count where menu_id = $1', [id]);
        const result3 = await query('delete from menu where menu_id = $1', [id]);


        res.status(200).json({id:id});


    } catch (error) {
        res.statusMessage = error;
        res.status(500).json({ error: error });
    }
});


//...............comment post code...................


menuRouter.get("/comment/:id", async (req, res) => {
    try {
        const result = await query ('SELECT * FROM comment WHERE menu_id = $1', [req.params.id]);
        const raws = result.rows ? result.rows : [];
        res.status(200).json(raws);

    } catch (error) {
        res.statusMessage = error;
        res.status(500).json({ error: error });
    }
});

menuRouter.post("/comment/new", async (req, res) => {
    try {
        const sql = 'insert into comment(comment_text,menu_id,account_id) values ($1,$2,$3) returning *'
        const result = await query(sql, [req.body.comment_text, req.body.menu_id, req.body.account_id]);
        res.status(200).json(result.rows[0]);

    } catch (error) {
        res.statusMessage = error;
        res.status(500).json({ error: error });
    }
})


//get comment count for menu_id
menuRouter.get("/comment/count/:id", async (req, res) => {
    try {
        const result = await query ('select count(comment_id) from comment inner join menu on menu.menu_id=comment.menu_id where menu.menu_id=$1;', [req.params.id]);
        //const raws = result.rows ? result.rows : [];
        res.status(200).json(result.rows[0]);

    } catch (error) {
        res.statusMessage = error;
        res.status(500).json({ error: error });
    }
});

// like routes.............................................................

//get comment count for menu_id
menuRouter.get("/like/:id", async (req, res) => {
    try {
        const result = await query ('select count(like_id) from like_count inner join menu on menu.menu_id=like_count.menu_id where menu.menu_id= $1;', [req.params.id]);
        //const raws = result.rows ? result.rows : [];
        res.status(200).json(result.rows[0]);

    } catch (error) {
        res.statusMessage = error;
        res.status(500).json({ error: error });
    }
});

//add like to database
menuRouter.post("/like/new", async (req, res) => {
    try {
        // Check if the user has already liked the menu item
        const existingLike = await query('SELECT * FROM like_count WHERE menu_id = $1 AND account_id = $2', [req.body.menu_id, req.body.account_id]);
        if (existingLike.rows.length > 0) {
            return res.status(400).json({ error: 'You have already liked this menu item' });
        }

        // If the user hasn't liked the menu item yet, add the like

        const sql = 'insert into like_count(menu_id,account_id) values ($1,$2) returning *'
        const result = await query(sql, [req.body.menu_id, req.body.account_id]);
        res.status(200).json(result.rows[0]);

    } catch (error) {
        res.statusMessage = error;
        res.status(500).json({ error: error });
    }
})




module.exports = {menuRouter};