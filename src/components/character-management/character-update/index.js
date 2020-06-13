import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "../../loading-spinner";
import CharacterListContext from "../../../contexts/character-list";
import CharacterCreate from "../character-create";
import { useParams } from "react-router-dom";


const CharacterUpdate = () => {
  const context = useContext(CharacterListContext);
  const {
    fetchCharacterById,
    fetchAllCharacters,
    setAllCharacters,
    isLoadingCharacters,
  } = context;
  const { id } = useParams();
  const [character, setCharacter] = useState();
  useEffect(() => {
    if (!isLoadingCharacters) {
      setCharacter(fetchCharacterById(id));
    }

    if (isLoadingCharacters) {
      fetchAllCharacters().then((characters) => {
        setAllCharacters(characters);
        setCharacter(fetchCharacterById(id));
      });
    }
  }, [isLoadingCharacters, fetchCharacterById, fetchAllCharacters,setAllCharacters, id]);

  // logic here for if ID does not exist
  console.log("rendering characte create for character ", character);
  return (
    <React.Suspense fallback={LoadingSpinner}>
      <CharacterCreate existingCharacterId={id} />
    </React.Suspense>
  );
};

CharacterUpdate.propTypes = {
  onCharacterSubmit: PropTypes.func,
};

CharacterUpdate.defaultProps = {
  onCharacterSubmit: null,
};

export default CharacterUpdate;
