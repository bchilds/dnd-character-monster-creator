import React from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "../../loading-spinner";
import CharacterCreate from "../character-create";
import { useParams } from "react-router-dom";

const CharacterUpdate = () => {
  const { id } = useParams();
  return (
    <React.Suspense fallback={<LoadingSpinner />}>
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
