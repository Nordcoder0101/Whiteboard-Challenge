'use strict';

module.exports = exports = {};

exports.map = function (array, callback) {
  if (!Array.isArray(array)) throw new Error('expected array');
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    returnArray.push(callback(array[i]));
  }
  return returnArray;
};

exports.filter = function (array, callback) {
  if (!Array.isArray(array)) throw new Error('expected array');
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      returnArray.push(array[i]);
    }
  }
  return returnArray
};

exports.reduce = function (array, acccumulator, start) {
  if (!Array.isArray(array)) throw new Error('expected array');
  if (!start) start = 0;
  let current = start;
  for (let i = 0; i < array.length; i++) {
    current = acccumulator(current, array[i]);
  }
  return current;
};
