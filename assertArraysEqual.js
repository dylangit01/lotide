const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  console.log(eqArrays(arr1, arr2));
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🟢🟢🟢 array:${arr1} and array:${arr2} are equal`);
  } else console.log(`🔴🔴🔴 array:${arr1} and array:${arr2} are not equal`);
};

assertArraysEqual([1, 2, 3], [1, 2, 4]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
assertArraysEqual(['1', '2', '3'], ['1', '2', 3]);
