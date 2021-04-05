const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected) === true) {
    console.log(`🟢🟢🟢 assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 assertion failed: ${actual} !== ${expected}`);
	}
};

module.exports = assertArraysEqual;
