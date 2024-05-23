/**
 * Splits a string into individual characters.
 * @param {string} input - The string to be split.
 * @returns {string[]} - An array of individual characters.
 */
function splitToChars(input) {
    if (typeof input !== 'string') {
      throw new TypeError('Expected a string');
    }
    return input.split('');
  }
  
  module.exports = splitToChars;
  