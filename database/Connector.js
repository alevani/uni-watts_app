"use strict"
const MongoClient = require('mongodb').MongoClient;

module.exports = class Connector {

    constructor(url, dbName) {
        this.url = url;
        this.dbName = dbName;
    }

    connect() {
        MongoClient.connect(this.url, { useUnifiedTopology: true }, function (err, client) {
            console.log("Connected successfully to server");
            const db = client.db('dwwa');

            client.close();
        });
    }
}

