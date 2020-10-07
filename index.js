"use strict"

require('dotenv').config()
const express = require('express');
const app = express();

const dbConnector = require('./database/Connector');
const port = 8080;
const endpoint = 'watts'
console.log(process.env.DB_HOST);
const conn = new dbConnector(process.env.DB_HOST, process.env.DB_NAME);

// Example callback wrapper
// const addUser = (x) => {
//     return function (err, client) {
//         console.log(x);
//         const db = client.db('watts');
//         /*
//         do something
//         */
//         client.close();
//     }
// }

// conn.execute(addUser('jerome'));
// conn.addUser('jerome');

app.get('/', (req, res) => {
    res.json('Hello world');
});


// app.get(`${endpoint}/friends`)
// app.post(`${endpoint}/friends`)
app.listen(port, () => {
    console.log(`Started listening on port ${port}`);
});