'use strict';

const express = require('express');
const fileRouter = express.Router();
const app = express();


fileRouter.post('/', (req, res) => {
    console.log('------post request made------');
    console.log(req);
    res.send('congrats, fucker!');
});



module.exports = fileRouter;