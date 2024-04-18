const express = require('express');
const { query } = require('../helpers/db.js');
const bcrypt = require('bcrypt');


const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
    try {
        const sql = "SELECT * FROM account WHERE email = $1";
        const result = await query(sql, [req.body.email]);
        if (result.rowCount === 1) {
            bcrypt.compare(req.body.password, result.rows[0].password, (err,bcrypt_res) =>{
             if(!err){
                if(bcrypt_res === true){
                    const user = result.rows[0];
                    res.status(200).json({"account_id": user.account_id, "email": user.email});
                } else {
                    res.statusMessage = 'Invalid login'
                    res.status(401).json({error: 'Invalid login'})
                  }
                } else {
                  res.statusMessage = err
                  res.status(500).json({error: err})
                }
              })
            } else {
              res.statusMessage = 'Invalid login'
              res.status(401).json({error: 'Invalid login'})
            }
          } catch (error) {
            res.statusMessage = error
            res.status(500).json({error: error})
          }
        });




userRouter.post("/register", async (req, res) => {
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if(!err){
            try {
                const sql = "INSERT INTO account (username, email, password) VALUES ($1, $2, $3) RETURNING account_id";
                const result = await query(sql, [req.body.username, req.body.email, hash]);
                res.status(201).json({ account_id: result.rows[0].account_id });
            } catch(error) {
                res.statusMessage = error;
                res.status(500).json({ error: error });
            }
            } else {    
                res.statusMessage = err;
                res.status(500).json({ error: err });
            }
     });
   
});


userRouter.get("/username/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    //GETTING USERNAME FROM TABLE ACCOUNT WHERE ACCOUNT_ID = $1 AND ASSIGN IT A VARIABLE CALLED USERNAME
    //const sql = "SELECT * FROM account WHERE account_id = $1";
    const result = await query("SELECT * FROM account WHERE account_id = $1", [id]);
    res.status(200).json({ username: result.rows[0].username });
    

  } catch (error) {
      res.statusMessage = error;
      res.status(500).json({ error: error });
  }
});




module.exports = { userRouter };