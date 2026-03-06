const express = require('express');
const router = express.Router();

// login route with session
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    // check if user exists in database
    const user = await DB.getDB().collection('users').findOne({ username, password });
    if (user) {
        // set session
        req.session.user = user;
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// dashboard protected route
router.get('/dashboard', (req, res) => {
    if(req.session.user) {
        res.json({ message: `Welcome to your dashboard, ${req.session.user.username}!` });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
});

// logout route
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.json({ message: 'Logout successful' });
    });
});

// register route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    
    // check if user already exists
    const existingUser = await DB.getDB().collection('users').findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // create new user
    const newUser = new User(username, password);
    await newUser.register();
    res.json({ message: 'Registration successful' });
});

module.exports = router;