/**
 * This file manages the debouncer by mantaining the timeout id stored inside
 * a `timeouts` object. When `debounce` is called, the tag is stored there as
 * the key to the timeout id. When needed (within the timeout period), it can
 * be called to restart the timeout or cleared to cancel the function call.
 */
const timeouts = {};

/**
 * Debouncer function to avoid multiple executions of a function during given time
 * @param {String} tag Tag string to reference this debounce action.
 * @param {Function} fn Function to be executed after timeout
 * @param {Number} timeout Time to wait before executing `fn`
 */
export const debounce = (tag, fn = () => {}, timeout = 500) => {
  if (timeouts[tag] !== undefined) clear(tag);
  timeouts[tag] = setTimeout(fn, timeout);
};

/**
 * Cancels a debouncer function.
 * @param {String} tag Debounce tag to be cancelled
 */
export const clear = (tag) => {
  if (timeouts[tag] === undefined) return;
  clearTimeout(timeouts[tag]);
  delete timeouts[tag];
};
