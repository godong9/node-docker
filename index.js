'use strict';

const express = require('express');
const uuid = require('uuid');

const app = express();
const port = 3000;

const id = uuid.v4();

app.get('/', function (req, res) {
   res.send(id);
});

app.listen(port, function () {
    console.log('Listening on port: ' + port);
});

