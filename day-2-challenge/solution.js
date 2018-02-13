'use strict';

module.exports = exports = {};

exports.doMath = function(arr) {
  if(!arr) throw new Error('array not provided');
  return {
    highest: Math.max.apply(null, arr),
    nextHighest: arr.splice(arr.indexOf(this.highest, 1)),
    nextHighest: Math.max.apply(null, arr)
  };
};

