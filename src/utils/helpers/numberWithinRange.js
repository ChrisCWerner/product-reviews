/**
 * Helper function to validate if given number is within min/max inclusive range.
 * @param {Number} number Number to be validated
 * @param {Number} min `number` must be equal or greater than this
 * @param {Number} max `number` must be equal or lesser than this
 * @returns `true` if the number is within range and `false` if not
 */
export const numberWithinRange = (number, min, max) => {
  return number >= min && number <= max;
};
