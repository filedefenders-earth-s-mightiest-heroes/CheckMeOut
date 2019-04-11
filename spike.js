'use strict';

require('dotenv').config();


const superagent = require('superagent');
const http = require("https");


superagent.post('https://api.metadefender.com/v4/file')
    .set('apikey', `${process.env.API_KEY}`)
    .set('Content-Type', 'application/octet-stream')
    .send("------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"\"; filename=\"C:\\Users\\JeromeJoof\\Desktop\\kayjay.jpg\"\r\nContent-Type: application/pdf\r\n\r\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--")
    // .set('filename', '@/path/to/https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak/media/14_phak_ch12.pdf')
    .then(res => {
        // console.log(res)
        // let req = http.request(superagent, function (res) {
        //     let chunks = [];
        //
        //     res.on("data", function () {
        //         let body = Buffer.concat(chunks);
        //         console.log(body.toString());
        //
        //     });
        // });
        //
        // req.write("------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"\"; filename=\"C:\\Users\\JeromeJoof\\Desktop\\kayjay.jpg\"\r\nContent-Type: application/pdf\r\n\r\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--")

    })
     .catch(console.log);



