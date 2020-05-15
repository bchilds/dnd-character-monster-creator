const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Character = new Schema(
  {
    name: { type: String, required: true },
    race: { type: String, required: false },
    level: { type: [Number], required: true },
    characterClass: { type: String, required: true },
    subclass: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("character", Character);
