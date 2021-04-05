const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  let keyArr = Object.keys(object1);

  for (let key of keyArr) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === 'object') {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

/* 
		Q: 
		why "else if" part cannot be just "if" or "else" only:
      if (object1[key] !== object2[key]) {
      console.log(object1[key], object2[key], key) === [ '2', 3 ] [ '2', 3 ] d;
      return false; 
      Answer: using if will exclude other conditions, usig else will return true of flase immediately with loop rest elements
*/
