const DB = require('./db');

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    async register() {
        const connection = await DB.getDB();
        return connection.collection('users').insertOne({
            username: this.username,
            password: this.password,
        });
    }
}

module.exports = User;