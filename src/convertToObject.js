'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.length) {
    return {};
  }

  const result = {};
  const cleanedString = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  // console.log(cleanedString);

  for (let i = 0; i < cleanedString.length; i++) {
    const [key, value] = cleanedString[i].split(':');

    result[key.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
