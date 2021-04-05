const eqObjects = require('./eqObjects')

const assertObjectsEqual = (actual, expected) => {
	const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`🟢🟢🟢 assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
	}
};

module.exports = assertObjectsEqual;
