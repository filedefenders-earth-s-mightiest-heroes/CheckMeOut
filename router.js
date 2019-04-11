'use strict';

const express = require('express');
const fileRouter = express.Router();
const app = express();


// fileRouter.post('retrieve data', (req, res,  ))
app.use((req,res,next) => {
    console.log('this is a middleware');
})

module.exports = fileRouter;