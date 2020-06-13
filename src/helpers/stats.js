import DefaultPointStrategy from "../defaults/point-strategy";

export const STR = "strength";
export const DEX = "dexterity";
export const CON = "constitution";
export const INT = "intelligence";
export const WIS = "wisdom";
export const CHR = "charisma";
export const allStats = [STR, DEX, CON, INT, WIS, CHR];
export const DEFAULT_VALUE = 8;

export const generateDefaultStats = function () {
  return {
    [STR]: DEFAULT_VALUE,
    [DEX]: DEFAULT_VALUE,
    [CON]: DEFAULT_VALUE,
    [INT]: DEFAULT_VALUE,
    [WIS]: DEFAULT_VALUE,
    [CHR]: DEFAULT_VALUE,
  };
};

export const getModifier = function (total) {
  return Math.floor((total - 10) / 2);
};

export const validateBaseStat = function (
  value,
  selectedPointsStrategy = DefaultPointStrategy
) {
  const { minStat, maxStat } = selectedPointsStrategy;
  if (value < minStat) {
    return Number(minStat);
  }

  if (value > maxStat) {
    return Number(maxStat);
  }

  return Number(value);
};

export default generateDefaultStats();
