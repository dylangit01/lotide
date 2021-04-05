// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

// findKey(obj, cb)
const findKey = require('./findKey');
// letterPositions(string)
const letterPositions = require('./letterPositions')
// findKeyByValue(obj, value)
const findKeyByValue = require('./findKeyByValue');

const flatten = require('./flatten')

module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  eqObjects,
  findKey,
  letterPositions,
	findKeyByValue,
	flatten,
};
