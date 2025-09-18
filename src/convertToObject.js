'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => line.split(':'))
    .filter((parts) => parts.length === 2)
    .reduce((styles, [key, value]) => {
      styles[key.trim()] = value.trim();

      return styles;
    }, {});
}

module.exports = convertToObject;
