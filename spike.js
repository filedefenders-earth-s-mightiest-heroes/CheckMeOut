'use strict';

require('dotenv').config();


const superagent = require('superagent');
const http = require("https");


superagent.post('https://api.metadefender.com/v4/file')
    .set('apikey', `${process.env.API_KEY}`)
    .set('content-type', 'application/octet-stream')
    // .set('filename', '@/path/to/https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak/media/14_phak_ch12.pdf')
    .then(console.log)
    .catch(console.log);

let req = http.request(options, function (res) {
    let chunks = []
})


