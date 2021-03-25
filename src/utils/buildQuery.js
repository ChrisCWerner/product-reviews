/**
 * Function to build a query string from an object. It ignores falsy
 * values inside the object, so it only builds the string with
 * valid data.
 *
 * @param {Object} obj Object to be transformed into a query string
 * @returns A string with the http query based on the object properties
 */
export const buildQuery = (obj) => {
  return Object.keys(obj)
    .reduce((query, key) => {
      if (Array.isArray(obj[key])) {
        obj[key].forEach((el) => (query += `&${key}=${el}`));
        return query;
      } else if (obj[key] || [false, 0].includes(obj[key])) {
        return (query += `&${key}=${obj[key]}`);
      }
      return query;
    }, "")
    .replace("&", "?");
};
