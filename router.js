'use strict';

const express = require('express');
const fileRouter = express.Router();
const app = express();


fileRouter.post('/', (req, res) => {
    console.log(req);
})


module.exports = fileRouter;