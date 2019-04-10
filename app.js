'use strict';

// 3rd party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const fileRouter = require('./router');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use(fileRouter);

let isRunning = false;

module.exports = {
    server: app,
    start: (port) => {
        if( ! isRunning ) {
            app.listen(port, () => {
                isRunning = true;
                console.log(`Server Up on ${port}`)
            });
        } else {
            console.log('Server is already running');
        }
    },
};