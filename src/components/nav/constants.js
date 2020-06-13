import CharacterManagementOptions from "./menu-options/character-management";
import MonsterManagementOptions from "./menu-options/monster-management";

export const CHAR_MGMT = "Character Management";
export const MONS_MGMT = "Monster Management";
export const MENU_OPTIONS = [CHAR_MGMT, MONS_MGMT];
export const MENU_OPTION_MAP = {
  [CHAR_MGMT]: CharacterManagementOptions,
  [MONS_MGMT]: MonsterManagementOptions,
};
export const MENU_OPTION_ROUTES = {
  [CHAR_MGMT]: "/characters",
  [MONS_MGMT]: "/monsters",
};
export const CREATE_ROUTE = "/characters/create";
export const LIST_ROUTE = "/characters/list";
