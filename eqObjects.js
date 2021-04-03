const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 ${actual} !== ${expected}`);
  } else {
    console.log(`🟢🟢🟢 ${actual} === ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

/*
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

  let keyArr = Object.keys(object1);

  for (let key of keyArr) {
    console.log(key);
    if (Array.isArray(object1[key])) {
      let tempResult = eqArrays(object1[key], object2[key]);
      if (tempResult === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
    /* why else if part cannot be just "if":
      if (object1[key] !== object2[key]) {
      console.log(object1[key], object2[key], key) === [ '2', 3 ] [ '2', 3 ] d;
      return false; *\/
  }
  return true;
};
*/

const eqObjects = function(object1, object2) {
  // check array fn:
  const eqArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    // console.log(Object.keys(object1).length, Object.keys(object2).length);
    return false;
  } 

  let keyArr = Object.keys(object1);

  for (let key of keyArr) {
    if (Array.isArray(object1[key])) {
      let tempResult = eqArrays(object1[key], object2[key]);
      if (tempResult === false) {
        return false;
      }
    } else if (typeof object1[key] === 'object') {
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  };
  return true;
};

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
assertEqual (eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: '1', b: '2', c: '3' };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: '1', d: ['2', 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

assertEqual(eqObjects(cd, cd2), false);




// Another version:
  const eqObjectsII = function (object1, object2) {
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);
    let result = false;
    if (keys1.length === keys2.length) {
      keys1.forEach((element) => {
        if (keys2.includes(element) && object1[element] === object2[element]) {
          result = true;
        } else if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
          result = eqArrays(object1[element], object2[element]);
        } else {
          result = false;
        }
      });
    }
    return result;
  };