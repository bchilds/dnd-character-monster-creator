const mongoose = require("mongoose");
const { Schema } = mongoose;

const Feat = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = {
  schema: Feat,
  model: mongoose.model("feat", Feat),
};
