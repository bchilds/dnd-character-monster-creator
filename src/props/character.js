import PropTypes from "prop-types";

export default PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  level: PropTypes.number,
  race: PropTypes.string,
  characterClass: PropTypes.string,
  subclass: PropTypes.string,
  feats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  languages: PropTypes.arrayOf(PropTypes.string),
  tools: PropTypes.arrayOf(PropTypes.string),
  baseStats: PropTypes.shape({
    strength: PropTypes.number.isRequired,
    dexterity: PropTypes.number.isRequired,
    constitution: PropTypes.number.isRequired,
    intelligence: PropTypes.number.isRequired,
    wisdom: PropTypes.number.isRequired,
    charisma: PropTypes.number.isRequired,
  }).isRequired,
});
