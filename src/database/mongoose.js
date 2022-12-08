const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.connection.on('connected', () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on('error', (err) => {
  console.error("Error connecting to mongo", err);
});

mongoose.Promise = global.Promise;

module.exports = mongoose;