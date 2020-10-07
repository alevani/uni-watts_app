"use strict"
const MongoClient = require('mongodb').MongoClient;

module.exports = class Connector {

    constructor(url, dbName) {
        console.log(url);
        this.url = url;
        this.dbName = dbName;
    }

    execute(callback) {
        MongoClient.connect(this.url, { useUnifiedTopology: true }, callback);
    }

    addUser(x) {
        MongoClient.connect(this.url, { useUnifiedTopology: true }, function (err, client) {
            console.log(x);
            const db = client.db('watts');
            /*
            do something
            */
            client.close();
        });
    }
}

