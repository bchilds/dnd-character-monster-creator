const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Character = new Schema(
    {
        name: { type: String, required: true },
        level: { type: [Number], required: true },
        characterClass: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('character', Character)