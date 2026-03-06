const { MongoClient } = require('mongodb');

class MongoDB {
    constructor() {
        this._client = null;
        this._db = null;
    }

    async getDB() {
        if (this._db) return this._db;

        if (!uri) uri = 'mongodb://localhost:27017';

        const client = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        this._client = client;
        this._db = client.db(dbName);
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

