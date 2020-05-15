const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/basic-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
