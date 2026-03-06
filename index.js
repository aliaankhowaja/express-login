const userRoute = require('./routes/users.js');

const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: false,
    cookie: { secure: false }
}));

app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

