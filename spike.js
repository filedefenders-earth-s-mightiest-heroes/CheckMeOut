'use strict';

require('dotenv').config();


const superagent = require('superagent');
const http = require("https");


superagent.post('https://api.metadefender.com/v4/file')
    .set('apikey', `${process.env.API_KEY}`)
    .set('content-type', 'application/octet-stream')
    // .set('filename', '@/path/to/https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak/media/14_phak_ch12.pdf')
    .then(res => {
        let req = http.request(superagent, function (res) {
            let chunks = [];

            res.on("data", function () {
                let body = Buffer.concat(chunks);
                console.log(body.toString());

            });
        });

        req.write()

    })
     .catch(console.log);



