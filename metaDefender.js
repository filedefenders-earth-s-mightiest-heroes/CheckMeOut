'use strict';
require('dotenv').config();

const superagent = require('superagent');
const http = require('https');
const express = require('express
const fileRouter = express.Router();


const app = express();




// Route
// fileRouter.post('/checkFile', (req, res, next) => {
//     superagent.post('https://api.metadefender.com/v4/file')
//     .set('apikey', `${process.env.API_KEY}`)
//     .set('Content-Type', 'application/octet-stream')
//         .send()
//
// }

fileRouter.post('/',(req,res,next) => {
    console.log(req);
})