const assertArraysEqual = function(arr1, arr2) {
  const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

  console.log(eqArrays(arr1, arr2));
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🟢🟢🟢 assertion passed: array:${arr1} === array:${arr2}`);
  } else console.log(`🔴🔴🔴 assertion failed:  array:${arr1} !== array:${arr2}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 4]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
assertArraysEqual(['1', '2', '3'], ['1', '2', 3]);
