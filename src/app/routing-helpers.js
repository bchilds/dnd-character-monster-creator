const charactersBaseRoute = "/characters";

const updateCharacterRoute = `${charactersBaseRoute}/update`;
export const updateCharactersMatch = `${updateCharacterRoute}/:id`;
export const getUpdateCharacterUrlById = (id) => {
  return `${updateCharacterRoute}/${id}`;
};
