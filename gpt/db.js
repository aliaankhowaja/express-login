const { MongoClient } = require('mongodb');

class MongoDB {
    constructor() {
        this._client = null;
        this._db = null;
    }

    async getDB() {
        if (this._db) return this._db;

        const uri = 'mongodb://127.0.0.1:27017/express-login-gpt';

        this._client = new MongoClient(uri);
        try {         
            await this._client.connect();
            console.log('Connected to MongoDB (GPT)');
            this._db = this._client.db('express-login-gpt');
            return this._db;
        } catch (err) {
            console.error('Failed to connect to MongoDB', err);
            throw err;
        }
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
