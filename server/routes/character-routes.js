const express = require("express");

const CharacterController = require("../controllers/character-controller");

const router = express.Router();

router.post("/character", CharacterController.createCharacter);
router.put("/character/:id", CharacterController.updateCharacter);
router.delete("/character/:id", CharacterController.deleteCharacter);
router.get("/character/:id", CharacterController.getCharacterById);
router.get("/characters", CharacterController.getAllCharacters);

module.exports = router;
