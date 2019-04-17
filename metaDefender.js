'use strict';

const superagent = require('superagent');
const morgan = require('morgan');










// const authorize = (req) => {
//
//     let code = req.query.code;
//     console.log('(1) CODE:', code);
//
//     return superagent.post('https://api.metadefender.com/v4/file')
//         .type('form')
//         .send({
//             code: code,
//             redirect_uri:`${process.env.API_KEY}`
//         })
//
//         .end((err, res) => {
//        })
//
//
// }