const { MongoClient } = require('mongodb');

class MongoDB {
    constructor() {
        this._client = null;
        this._db = null;
    }

    async getDB() {
        if (this._db) return this._db;

        const uri = 'mongodb://127.0.0.1:27017/express-login';

        const client = new MongoClient(uri);
        try {         
            await client.connect();
            console.log('Connected to MongoDB');
        } catch (err) {
            console.error('Failed to connect to MongoDB', err);
            throw err;
        }
        this._client = client;
        this._db = client.db('express-login');
        return this._db;
    }

    async close() {
        if (this._client) {
            await this._client.close();
            this._client = null;
            this._db = null;
        }
    }
}

module.exports = new MongoDB();

