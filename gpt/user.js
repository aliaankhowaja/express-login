const MongoDB = require('./db');

class User {
    static async findByUsername(username) {
        const db = await MongoDB.getDB();
        return db.collection('users').findOne({ username });
    }

    static async create(username, password) {
        const db = await MongoDB.getDB();
        return db.collection('users').insertOne({ username, password });
    }
}

module.exports = User;
