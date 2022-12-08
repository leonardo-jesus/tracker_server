require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();
const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = proccess.env.MONGO_URI;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log("Connected to mongo instance");
});
mongoose.connection.on('error', (err) => {
    console.error("Error connecting to mongo", err);
});

app.get('/', (_req, res) => {
    res.send("The Express request works for the Tracker App!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✔ Listening on port ${port}...`));