const Character = require("../db/models/character");

const createCharacter = (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "No character provided",
    });
  }

  const character = new Character(body);
  if (!character) {
    return res.status(400).json({
      success: false,
      error: "Could not create a character.",
    });
  }

  character
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: character._id,
        message: "Character created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Character not created!",
      });
    });
};

// const findCharacter = async (_id) => {
//   Character.findOne({ _id }, (err, character) => {
//   if (err) {
//     return res.status(400).json({
//       err,
//       message: "Character not found!",
//     });
//   }

//   if (!character) {
//     return res.status(404).json({
//       err,
//       message: "Character not found!",
//     });
//   }

//   return character;
// });
// }

const updateCharacter = async (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Character.findOne({ _id: req.params.id }, (err, character) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Character not found!",
      });
    }

    character.name = body.name || character.name || "Unnamed Hero";
    character.level = body.level || character.level || 1;
    character.characterClass =
      body.class || character.characterClass || "Unknown";
    character
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: character._id,
          message: "Character updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Character not updated!",
        });
      });
  });
};

const deleteCharacter = async (req, res) => {
  await Character.findOneAndDelete({ _id: req.params.id }, (err, character) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
      });
    }

    if (!character) {
      return res
        .status(404)
        .json({ success: false, error: `Character not found` });
    }

    res.status(200).json({ success: true, data: character });
  });
};

const getCharacterById = async (req, res) => {
  await Character.findOne({ _id: req.params.id }, (err, character) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
      });
    }

    if (!character) {
      return res
        .status(404)
        .json({ success: false, error: `Character not found` });
    }

    return res.send(200).json({ success: true, data: character });
  }).catch((err) => {
    console.log(err);
  });
};

const getAllCharacters = async (req, res) => {
  await Character.find({}, (err, characters = []) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
      });
    }

    if (!characters.length) {
      return res
        .status(404)
        .json({ success: false, error: `Characters not found` });
    }

    return res.status(200).json({ success: true, data: characters });
  });
};

module.exports = {
  createCharacter,
  updateCharacter,
  deleteCharacter,
  getCharacterById,
  getAllCharacters,
};
