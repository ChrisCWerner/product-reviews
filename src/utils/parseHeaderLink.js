/**
 * Function to parse Link header string to an usable object with first, last, next and previous pages.
 * @param {String} linkString String from Link header returned from `json-server` when query `_limit` is sent.
 * @returns Object with first, last, next and previous page, when available.
 */
export const parseHeaderLink = (linkString) => {
  return linkString.split(", ").reduce((pagination, str) => {
    const s = str.split("; ");
    pagination[s[1].replace(/rel="(.*)"/, "$1")] = Number(
      s[0].replace(/.*_page=(.*)&.*/, "$1")
    );
    return pagination;
  }, {});
};
