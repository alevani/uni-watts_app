"use strict"

const express = require('express');
const dbConnector = require('./database/Connector');
const app = express();
const port = 8080;

const endpoint = 'watts'

// Database info
//TODO move the below to a util file
const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

const conn = new dbConnector(url, dbName);

// Example callback wrapper
const addUser = (x) => {
    return function (err, client) {
        console.log(x);
        const db = client.db('watts');
        /*
        do something
        */
        client.close();
    }
}


conn.execute(addUser('jerome'));
conn.addUser('jerome');

app.get('/', (req, res) => {
    res.json('Hello world');
});

// app.get(`${endpoint}/friends`)

app.listen(port, () => {
    console.log(`Started listening on port ${port}`);
});