const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGOD_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const dbConnection = mongoose.connection;

module.exports = dbConnection;
