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
    .map((line) => line.split(':').map((str) => str.trim()))
    .filter(([key, value]) => key.length > 0 && value.length > 0)
    .reduce((styles, [key, value]) => {
      styles[key] = value;

      return styles;
    }, {});
}

module.exports = convertToObject;
