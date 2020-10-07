"use strict"

const express = require('express');
let dbConnector = require('./database/Connector');
const app = express();
const port = 8080;

const endpoint = 'watts'

// Database info
//TODO move the below to a util file
const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

const conn = new dbConnector(url, dbName);
conn.connect();

// const connector = new dbConnector(url, dbName);

// connector.connect();

app.get('/', (req, res) => {
    res.json('Hello world');
});

// app.get(`${endpoint}/friends`)

app.listen(port, () => {
    console.log(`Started listening on port ${port}`);
});