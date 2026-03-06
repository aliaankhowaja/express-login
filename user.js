const DB = require('./db');

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    register() {
        const connection = DB.getDB();
        return connection.collection('users').insertOne({
            username: this.username,
            password: this.password,
        });
    }
}