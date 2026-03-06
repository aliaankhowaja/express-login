const userRoute = require('./routes/users.js');
const commentRoute = require('./routes/comments.js');

const express = require('express');

const app = express();
const PORT = 3000;

app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

