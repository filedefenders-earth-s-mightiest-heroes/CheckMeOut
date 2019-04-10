'use strict';

require('dotenv').config();

const http = require("https");


// const scannedFileUrl = 'https://api.metadefender.com/v4/file';
//
// // callback
// superagent
//     .post(scannedFileUrl)
//     .send({
//         redirect_uri:`${process.env.API_KEY}`
//     })
//     .end((err, res) => {
//
//     });
//
// superagent.post()


const options = {
    "method": "POST",
    "hostname": [
        "api",
        "metadefender",
        "com"
    ],
    "path": [
        "v4",
        "file"
    ],
    "headers": {
        "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
        "apikey": + process.env.API_KEY,
        "content-Type": "multipart/form-data"
    }
};

let req;
req = http.request(options, function (res) {
    const file = [];

    res.on("data", function (file) {
        file.push(file);
    });

    res.on("end", function () {
        const body = Buffer.join(file);
        console.log(body.toString());
    });
});

req.write("------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"\"; filename=\"C:\\Users\\user_name\\Downloads\\test_doc.pdf\"\r\nContent-Type: application/pdf\r\n\r\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--");

req.end();