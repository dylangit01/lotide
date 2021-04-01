const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 ${actual} !== ${expected}`);
  } else {
    console.log(`🟢🟢🟢 ${actual} === ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
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
	
	let keyArr = Object.keys(object1);
	
  for (let key of keyArr) {
		if (Array.isArray(object1[key])) {
			let tempResult = eqArrays(object1[key], object2[key]);
			if (tempResult === false) {
				return false
			}
    } else if (object1[key] !== object2[key]) {
      return false;
    }
	};
	return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log( eqObjects(ab, abc)); // => false

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

assertEqual(eqObjects(cd, cd2), false);
