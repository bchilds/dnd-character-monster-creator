const mongoose = require("mongoose");
const { Schema } = mongoose;

const getModifier = (stat) => Math.floor(stat - 10) / 2;

const Statblock = new Schema({
  strength: { type: String, required: true },
  dexterity: { type: String, required: true },
  constitution: { type: String, required: true },
  intelligence: { type: String, required: true },
  wisdom: { type: String, required: true },
  charisma: { type: String, required: true },
}, { toJSON: { virtuals: true } });

Statblock.virtual("strengthMod").get(() => getModifier(this.strength));
Statblock.virtual("dexterityMod").get(() => getModifier(this.dexterity));
Statblock.virtual("constitutionMod").get(() => getModifier(this.constitution));
Statblock.virtual("intelligenceMod").get(() => getModifier(this.intelligence));
Statblock.virtual("wisdomMod").get(() => getModifier(this.wisdom));
Statblock.virtual("charismaMod").get(() => getModifier(this.charisma));

module.exports = {
  schema: Statblock,
  model: mongoose.model("statblock", Statblock),
}