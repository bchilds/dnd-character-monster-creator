const mongoose = require("mongoose");
const Statblock = require("./statblock");
const Feat = require("./feat");
const { Schema } = mongoose;

const Character = new Schema(
  {
    name: { type: String, required: true },
    race: { type: String, required: false },
    level: { type: Number, required: true },
    characterClass: { type: String, required: true },
    subclass: { type: String, required: false },
    descripton: { type: String, required: false },
    languages: [{ type: String, required: true }],
    tools: [{ type: String, required: false}],
    stats: Statblock.schema,
    feats: [Feat.schema],
  },
  { timestamps: true }
);

Character.query.byName = function(name) {
    return this.where({ name: new RegExp(name, 'i') });
  };

module.exports = mongoose.model("character", Character);
