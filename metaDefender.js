'use strict';

const superagent = require('superagent');

const authorize = (req) => {

    let code = req.query.code;
    console.log('(1) CODE:', code);

    return superagent.post('https://api.metadefender.com/v4/file')
        .type('form')
        .send({
            code: code,
            redirect_uri:`${process.env.API_KEY}`
        })

    // superagent.post('https://api.metadefender.com/v4/file').then(console.log).catch(console.error);

        .end((err, res) => {
       })

    // promise with async/await
    (async () => {
        try {
            const res = await superagent.post('https://api.metadefender.com/v4/file')
            console.log(res);
        } catch (err) {
            console.error(err);
        }

    })();

}