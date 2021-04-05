// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  let keyArr = Object.keys(object1);

  for (let key of keyArr) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
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

module.exports = eqObjects;


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