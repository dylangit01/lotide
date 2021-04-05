module.exports = findKey = (obj, callback) => {
  let keyName = '';
  for (let key in obj) {
    if (callback(obj[key])) {
      keyName = key;
      break;
    }
  }
  // console.log(keyName);
  return keyName;
};

console.log(
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

let res1 = findKey(
  {
    'Blue Hill': { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);

const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 ${actual} !== ${expected}`);
  } else {
    console.log(`🟢🟢🟢 ${actual} === ${expected}`);
  }
};

// assertEqual(res1, 'noma')