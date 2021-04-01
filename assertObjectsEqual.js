const eqObjects = function (object1, object2) {
  const eqArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };

  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  const keyArr = Object.keys(object1);

  for (const key of keyArr) {
    if (Array.isArray(object1[key])) {
      let tempResult = eqArrays(object1[key], object2[key]);
      if (tempResult === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
	const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`🟢🟢🟢 assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
	}
};

assertObjectsEqual({ a: '1', b: '2' }, { b: '2', a: '1' });
assertObjectsEqual({ a: '1', b: '2' }, { a: '1', b: '2', c: '3' });

