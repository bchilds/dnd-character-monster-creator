import apiBase from "../api-base";

export const getAllCharacters = () => apiBase.get("/characters");
export const getCharacterById = (id) => apiBase.get(`/character/${id}`);
export const createNewCharacter = (payload) => apiBase.post("/character");
export const deleteCharacter = (id) => apiBase.delete(`/character/${id}`);
export const editCharacterAttributesById = (id, payload) =>
  apiBase.put(`/character/${id}`, payload);

export default {
  getAllCharacters,
  getCharacterById,
  createNewCharacter,
  deleteCharacter,
  editCharacterAttributesById,
};
