const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./controllers/authController')(app);
app.get('/', (_req, res) => {
    res.send("The Express request works for the Tracker App!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✔ Listening on port ${port}...`));