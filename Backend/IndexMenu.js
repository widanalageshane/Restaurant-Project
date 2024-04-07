const express = require('express');
const cors = require('cors');
const { menuRouter } = require('./routes/indexMenu.js');

const port = 3001;

const app = express();
app.use(cors());
app.use(express.json())



app.use(express.urlencoded({extended: false}));
app.use('/', menuRouter);



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});