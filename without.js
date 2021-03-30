const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let outcome = true;
  arr1.forEach((item, i) => {
    if (item !== arr2[i]) {
      return (outcome = false);
    }
  });
  return outcome;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🟢🟢🟢 array:${arr1} and array:${arr2} are equal`);
  } else console.log(`🔴🔴🔴 array:${arr1} and array:${arr2} are not equal`);
};

const without = (originalArr, itemsToRemove) => {
	let outcome = originalArr.filter(item => {
		return !itemsToRemove.includes(item)
	})
	console.log(outcome);
	return outcome
}

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse', 'hello']); 
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]