"use strict"

const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.json('Hello world');
});

app.listen(port, () => {
    console.log(`Started listening on port ${port}`);
});

